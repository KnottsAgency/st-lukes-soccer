import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><div className="eyebrow">ST. LUKE&apos;S SOCCER</div><h1>About Our Program</h1><p>One program. One family. One goal.</p></div></section>
      <section className="wrap section"><div className="eyebrow red">BE BETTER EACH DAY</div><h2>Building Better Players and People</h2><p style={{maxWidth:"750px",lineHeight:1.8}}>St. Luke&apos;s Soccer brings together boys&apos; and girls&apos; teams across middle school, junior varsity, and varsity levels. We emphasize accountability, consistency, and development as we strive to grow together.</p><div className="cards"><div className="card"><h3>Accountability</h3><p>Taking responsibility for ourselves and our teammates.</p></div><div className="card"><h3>Consistency</h3><p>Building habits that support long-term growth.</p></div><div className="card"><h3>Development</h3><p>Improving each day on and off the field.</p></div></div><div className="actions"><Link href="/boys" className="card-link">Boys program →</Link><Link href="/girls" className="card-link">Girls program →</Link></div></section>
    </>
  );
}
