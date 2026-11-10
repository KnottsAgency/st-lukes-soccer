import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><div className="eyebrow">ST. LUKE&apos;S SOCCER</div><h1>Varsity Girls</h1><p>Be better each day. One program, one family, one goal.</p></div></section>
      <section className="wrap section"><div className="eyebrow red">HIGH SCHOOL · GIRLS&apos; SOCCER</div>
<h2>Welcome to Varsity Girls</h2><p style={{maxWidth: "720px",lineHeight:1.8}}>Developing leadership, competitive excellence, and a shared commitment to growth on and off the field.</p>
<div className="cards" style={{marginTop:"32px"}}>
<div className="card"><h3>Schedules</h3><p>Public match schedules and important program dates will be posted as they are confirmed.</p><Link href="/schedules" className="card-link">View schedules →</Link></div>
<div className="card"><h3>Family Resources</h3><p>Approved families will have access to team announcements, documents, and required gear when the secure portal launches.</p><Link href="/login" className="card-link">Portal information →</Link></div>
<div className="card"><h3>Support Our Teams</h3><p>Learn about sponsorship opportunities supporting St. Luke&apos;s Soccer.</p><Link href="/sponsors" className="card-link">Sponsorships →</Link></div>
</div><p style={{marginTop:"30px"}}><Link href="/girls" className="card-link">Back to Girls Soccer →</Link></p></section>
    </>
  );
}
