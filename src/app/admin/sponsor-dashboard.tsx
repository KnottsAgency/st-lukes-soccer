"use client";
import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";

type RecordItem = { id:string; created_at:string; company_name:string; contact_name:string; email:string; phone:string|null; package_type:string; amount_cents:number; player_to_credit:string|null; status:string; paid_at:string|null };

const money = (cents:number)=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(cents/100);

export function AdminDashboard({initialRecords}:{initialRecords:RecordItem[]}) {
  const [records,setRecords] = useState(initialRecords);
  const [working,setWorking] = useState<string|null>(null);
  const [notice,setNotice] = useState("");
  const paidTotal = records.filter(x=>x.status==="paid").reduce((a,x)=>a+x.amount_cents,0);
  const committed = records.filter(x=>x.status==="approved"||x.status==="paid");
  const counts = (kind:string)=>committed.filter(x=>x.package_type===kind).length;
  async function update(id:string,status:string) {
    const client=getSupabaseBrowserClient();
    if(!client) return;
    setWorking(id);
    setNotice("");
    const {data,error}=await client.from("sponsorship_submissions").update({
      status, paid_at:status==="paid"?new Date().toISOString():null
    }).eq("id",id).select("id,status,paid_at").single();
    if(error||!data) setNotice("Could not save this change. Please try again.");
    else setRecords(prev=>prev.map(x=>x.id===id?{...x,status:data.status,paid_at:data.paid_at}:x));
    setWorking(null);
  }
  async function signOut(){
    const client=getSupabaseBrowserClient();
    if(client){await client.auth.signOut();window.location.href="/admin/login";}
  }
  return <><section className="page-hero"><div className="wrap"><div className="eyebrow">STAFF ONLY</div><h1>2027 Sponsorship Dashboard</h1><p>Manage submissions, confirm commitments, and record received payments.</p></div></section>
    <section className="wrap section">
      <div className="admin-toolbar"><div><h2>Sponsorship Overview</h2><p>Only approved or paid sponsors count against package limits. Player credit is awarded after payment is received.</p></div><button type="button" className="button" onClick={signOut}>Sign out</button></div>
      <div className="stats-grid">
        <div className="card"><h3>Submissions</h3><p className="stat-number">{records.length}</p></div>
        <div className="card"><h3>Committed</h3><p className="stat-number">{committed.length}</p></div>
        <div className="card"><h3>Paid sponsorships</h3><p className="stat-number">{money(paidTotal)}</p></div>
      </div>
      <h2 style={{marginTop:40}}>Package Availability</h2>
      <div className="stats-grid">
        <div className="card"><strong>Presenting</strong><p>{Math.max(0,1-counts("presenting"))} of 1 remaining</p></div>
        <div className="card"><strong>Platinum</strong><p>{Math.max(0,2-counts("platinum"))} of 2 remaining</p></div>
        <div className="card"><strong>Gold</strong><p>{Math.max(0,4-counts("gold"))} of 4 remaining</p></div>
        <div className="card"><strong>Silver + Bronze</strong><p>{Math.max(0,12-counts("silver")-counts("bronze"))} of 12 remaining (combined)</p></div>
      </div>
      <h2 style={{marginTop:40}}>Sponsor Records</h2>
      {notice && <p role="alert" className="notice">{notice}</p>}
      <div className="table-scroll"><table className="sponsor-table"><thead><tr><th>Business</th><th>Package</th><th>Amount</th><th>Player credit</th><th>Contact</th><th>Status</th></tr></thead><tbody>
      {records.map(x=><tr key={x.id}><td><strong>{x.company_name}</strong><br/><small>{new Date(x.created_at).toLocaleDateString()}</small></td><td>{x.package_type}</td><td>{money(x.amount_cents)}</td><td>{x.player_to_credit||"—"}</td><td>{x.contact_name}<br/><a href={"mailto:"+x.email}>{x.email}</a>{x.phone&&<><br/>{x.phone}</>}</td><td>
        <select aria-label={"Status for "+x.company_name} disabled={working===x.id} value={x.status} onChange={e=>update(x.id,e.target.value)}>
          <option value="submitted">Submitted</option><option value="contacted">Contacted</option><option value="approved">Approved</option><option value="paid">Paid</option><option value="declined">Declined</option>
        </select>
      </td></tr>)}
      {!records.length&&<tr><td colSpan={6}>No sponsorship applications received yet.</td></tr>}</tbody></table></div>
      <p style={{color:"#636774",marginTop:18}}>Payment statuses are recorded manually. This dashboard does not process money or confirm payment automatically.</p>
    </section></>;
}
