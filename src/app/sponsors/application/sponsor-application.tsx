"use client";
import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { sponsorshipOptions } from "@/lib/sponsorships";

export function SponsorApplication({enabled,siteKey}:{enabled:boolean;siteKey:string}) {
  const [type,setType]=useState("presenting");
  const [paymentMethod,setPaymentMethod]=useState("check");
  const [customAmount,setCustomAmount]=useState("");
  const [busy,setBusy]=useState(false);
  const [success,setSuccess]=useState(false);
  const [error,setError]=useState("");
  const chosen=sponsorshipOptions.find(x=>x.value===type);
  const amount=type==="donation"?Number(customAmount||0):chosen?.price||0;
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    setError("");
    if(!enabled) return;
    setBusy(true);
    const form=event.currentTarget;
    const data=Object.fromEntries(new FormData(form).entries());
    try {
      const response=await fetch("/api/sponsors/apply",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
      const result=await response.json();
      if(!response.ok) throw new Error(result.error||"Submission could not be completed.");
      setSuccess(true);
    } catch(e) { setError(e instanceof Error?e.message:"Submission failed."); }
    finally {setBusy(false);}
  }
  if(success) return <div className="form-panel"><h2>Application received</h2><p>Your request has been submitted for review. A staff member will confirm availability and your chosen payment method. No payment has been collected by this website.</p><Link href="/sponsors" className="card-link">Return to sponsorships →</Link></div>;
  return <>
    {!enabled&&<div className="notice"><strong>Applications not open yet.</strong><p>This is an interactive preview: you can choose any sponsorship level and payment method, but the Submit button is disabled until the school-approved database and anti-spam verification are configured. No information entered here will be sent.</p></div>}
    <div className="form-panel">
      <h2>2027 Sponsorship Request</h2>
      <p>Submitting this form does not reserve a package or process a payment. Availability will be confirmed by program staff.</p>
      <form className="stack-form" onSubmit={submit}>
        <label htmlFor="package_type">Sponsorship level *</label>
        <select id="package_type" name="package_type" value={type} onChange={e=>setType(e.target.value)} required>
          {sponsorshipOptions.map(x=><option key={x.value} value={x.value}>{x.label} — {x.price===null?"Any amount":"$"+x.price.toLocaleString()}</option>)}
        </select>
        {type==="donation"&&<><label htmlFor="donation_amount">Donation amount (USD) *</label><input id="donation_amount" name="donation_amount" type="number" min="1" max="100000" step="0.01" value={customAmount} onChange={e=>setCustomAmount(e.target.value)} required/></>}
        <p className="application-total">Selected amount: <strong>{amount>0?"$"+amount.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"Enter amount"}</strong></p>
        <fieldset className="payment-choice">
          <legend>Preferred payment method *</legend>
          <label><input type="radio" name="payment_method" value="check" checked={paymentMethod==="check"} onChange={()=>setPaymentMethod("check")} required/> Check — mailed or dropped off at school</label>
          <label><input type="radio" name="payment_method" value="venmo" checked={paymentMethod==="venmo"} onChange={()=>setPaymentMethod("venmo")} required/> Venmo — @StLukes-EpiscopalSchool</label>
        </fieldset>
        <div className="notice">
          {paymentMethod==="check" ? (
            <p><strong>Pay by check:</strong> Mail or drop off a check at St. Luke&apos;s Episcopal School. Make sure the payment identifies the sponsorship or business. Staff will confirm mailing instructions and receipt.</p>
          ) : (
            <p><strong>Pay by Venmo:</strong> @StLukes-EpiscopalSchool. Please verify the recipient is the school&apos;s official account before sending money, and include the sponsorship or business name in the payment note without student details.</p>
          )}
          <p>Choosing a method does not collect a payment. Staff must confirm receipt before credit is applied.</p>
        </div>
        <label htmlFor="company_name">Business / supporter name *</label><input id="company_name" name="company_name" maxLength={150} required/>
        <label htmlFor="contact_name">Contact name *</label><input id="contact_name" name="contact_name" maxLength={120} required/>
        <div className="form-two">
          <div><label htmlFor="email">Email address *</label><input id="email" name="email" type="email" maxLength={160} required/></div>
          <div><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" maxLength={30} /></div>
        </div>
        <label htmlFor="address">Business mailing address (optional)</label><input id="address" name="address" maxLength={240} />
        <label htmlFor="player_to_credit">Player to credit (optional)</label><input id="player_to_credit" name="player_to_credit" maxLength={120} /><small>Only include a player&apos;s name with their family&apos;s permission. Credit is assigned only after payment is received.</small>
        <label htmlFor="notes">Questions or special requests (optional)</label><textarea id="notes" name="notes" maxLength={1000} rows={4} />
        <div className="hidden-honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input name="website" id="website" tabIndex={-1} autoComplete="off"/></div>
        {enabled&&<><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive"/><div className="cf-turnstile" data-sitekey={siteKey}/></>}
        <p style={{fontSize:13,color:"#636774"}}>We will use the submitted information only to coordinate sponsorships and fundraising. No card information is collected here. Do not enter student financial or medical information.</p>
        {error&&<p role="alert" className="notice">{error}</p>}
        <button className="button" type="submit" disabled={!enabled||busy}>{busy?"Submitting...":"Submit sponsorship request"}</button>
      </form>
    </div>
  </>;
}
