import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><div className="eyebrow">ST. LUKE&apos;S SOCCER</div><h1>Schedules & Events</h1><p>Find the right team and stay informed about upcoming matches.</p></div></section>
      <section className="wrap section"><div className="eyebrow red">TEAM SCHEDULES</div><h2>Choose a Team</h2><p>Official schedules will be added after the coaching staff confirms dates and venues. No unverified fixtures are published here.</p><div className="cards"><div className="card"><div className="eyebrow red">BOYS&apos; SOCCER</div><h3>Varsity Boys</h3><p>Schedule coming soon.</p><Link href="/boys/varsity" className="card-link">Team page →</Link></div><div className="card"><div className="eyebrow red">BOYS&apos; SOCCER</div><h3>JV Boys</h3><p>Schedule coming soon.</p><Link href="/boys/jv" className="card-link">Team page →</Link></div><div className="card"><div className="eyebrow red">BOYS&apos; SOCCER</div><h3>Middle School Boys</h3><p>Schedule coming soon.</p><Link href="/boys/middle-school" className="card-link">Team page →</Link></div><div className="card"><div className="eyebrow red">GIRLS&apos; SOCCER</div><h3>Varsity Girls</h3><p>Schedule coming soon.</p><Link href="/girls/varsity" className="card-link">Team page →</Link></div><div className="card"><div className="eyebrow red">GIRLS&apos; SOCCER</div><h3>JV Girls</h3><p>Schedule coming soon.</p><Link href="/girls/jv" className="card-link">Team page →</Link></div></div></section>
    </>
  );
}
