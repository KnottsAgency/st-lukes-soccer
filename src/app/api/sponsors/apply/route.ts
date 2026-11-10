import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sponsorshipOptions } from "@/lib/sponsorships";

export const runtime = "nodejs";

function fail(error:string,status:number){return NextResponse.json({error},{status});}
function asText(value:unknown,max:number){return typeof value==="string"?value.trim().slice(0,max+1):"";}

export async function POST(req:NextRequest){
  const url=process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  const secret=process.env.TURNSTILE_SECRET_KEY;
  const emailKey=process.env.RESEND_API_KEY;
  const emailFrom=process.env.SPONSOR_FROM_EMAIL;
  if(!url||!key||!secret||!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY||!emailKey||!emailFrom) return fail("Applications are not available yet.",503);

  const origin=req.headers.get("origin");
  if(!origin||origin!==req.nextUrl.origin) return fail("Invalid request origin.",403);
  if(Number(req.headers.get("content-length")||0)>15000) return fail("Request too large.",413);

  let input:Record<string,unknown>;
  try{input=await req.json();if(!input||typeof input!=="object"||Array.isArray(input))throw Error();}catch{return fail("Invalid application.",400);}
  if(input.website) return fail("Could not process application.",400);

  const paymentMethod=asText(input.payment_method,12);
  if(paymentMethod!=="check" && paymentMethod!=="venmo") return fail("Choose Check or Venmo for payment.",400);
  const packageType=asText(input.package_type,30);
  const option=sponsorshipOptions.find(x=>x.value===packageType);
  if(!option) return fail("Choose a valid sponsorship.",400);
  const donation=Number(input.donation_amount);
  const amount=option.price===null?donation:option.price;
  if(!Number.isFinite(amount)||amount<1||amount>100000||Math.round(amount*100)!==amount*100) return fail("Invalid amount.",400);
  const company=asText(input.company_name,150);
  const contact=asText(input.contact_name,120);
  const email=asText(input.email,160);
  const phone=asText(input.phone,30);
  const address=asText(input.address,240);
  const player=asText(input.player_to_credit,120);
  const notes=asText(input.notes,1000);
  if(!company||company.length>150||!contact||contact.length>120||!email||email.length>160||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||phone.length>30||address.length>240||player.length>120||notes.length>1000) return fail("Please check required fields.",400);

  const token=asText(input["cf-turnstile-response"],2000);
  if(!token) return fail("Complete verification before submitting.",400);
  try {
    const verified=await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",{
      method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},
      body:new URLSearchParams({secret,response:token,remoteip:req.headers.get("cf-connecting-ip")||""}),
      cache:"no-store",
    });
    const check=await verified.json();
    if(!check.success) return fail("Verification failed. Please try again.",400);
  }catch{return fail("Verification is temporarily unavailable.",503);}

  const supabase=createClient(url,key,{auth:{autoRefreshToken:false,persistSession:false}});
  const {data:saved,error}=await supabase.from("sponsorship_submissions").insert({
    company_name:company,contact_name:contact,email,phone:phone||null,address:address||null,
    package_type:packageType,amount_cents:Math.round(amount*100),payment_method:paymentMethod,
    player_to_credit:player||null,notes:notes||null,status:"submitted",notification_status:"pending",
  }).select("id").single();
  if(error||!saved){console.error("Sponsor insert failed",error?.code);return fail("Unable to save your application. Please try again later.",503);}
  const textLines=[
    "New St. Luke's Soccer Sponsorship Application (2027)",
    "Application ID: "+saved.id,
    "Package: "+option.label,
    "Amount: "+new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(amount),
    "Payment preference: "+(paymentMethod==="venmo"?"Venmo (@StLukes-EpiscopalSchool)":"Check (mailed or dropped off at school)"),
    "Company / supporter: "+company,
    "Contact name: "+contact,
    "Email: "+email,
    "Phone: "+(phone||"Not provided"),
    "Mailing address: "+(address||"Not provided"),
    "Player to credit: "+(player||"Not specified"),
    "Notes: "+(notes||"None"),
    "",
    "Payment has not been confirmed. Please review in the staff dashboard."
  ];
  let notificationSent=false;
  try {
    const response=await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+emailKey,
        "Content-Type":"application/json",
        "Idempotency-Key":"stlukes-sponsor-"+saved.id
      },
      body:JSON.stringify({
        from:emailFrom,
        to:["bknotts@slesmobile.org"],
        reply_to:email,
        subject:"New St. Luke's Soccer sponsorship: "+option.label,
        text:textLines.join("\n")
      }),
      signal:AbortSignal.timeout(10000),
      cache:"no-store"
    });
    notificationSent=response.ok;
    if(!notificationSent) console.error("Sponsor email rejected by provider",response.status);
  }catch{
    console.error("Sponsor email provider unavailable");
  }
  const {error:statusError}=await supabase.from("sponsorship_submissions")
    .update({notification_status:notificationSent?"sent":"failed"})
    .eq("id",saved.id);
  if(statusError) console.error("Sponsor email status update failed",statusError.code);
  return NextResponse.json({ok:true,notificationSent},{status:201,headers:{"Cache-Control":"no-store"}});
}
