import Link from "next/link";
export default function Home() { return <>
  <section className="hero"><div className="wrap hero-inner"><div className="eyebrow">ST. LUKE&apos;S SOCCER PROGRAM</div>
    <h1>ONE PROGRAM.<br/><span>ONE FAMILY.</span><br/>ONE GOAL.</h1>
    <p>A place for players, families, alumni, and supporters to stay connected to St. Luke&apos;s boys&apos; and girls&apos; soccer.</p>
    <div className="actions"><Link href="/login" className="button">Family Portal →</Link><Link href="/sponsors" className="button button-outline">Become a Sponsor →</Link></div>
  </div></section>
  <section className="wrap section"><div className="eyebrow red">EXPLORE THE PROGRAM</div><h2>Everything soccer. One place.</h2>
    <div className="cards"><Link className="card" href="/boys"><span className="card-icon">⚽</span><h3>Boys&apos; Soccer</h3><p>Varsity and JV program information, schedules and updates.</p><span className="card-link">Explore boys&apos; soccer →</span></Link>
    <Link className="card" href="/girls"><span className="card-icon">⚽</span><h3>Girls&apos; Soccer</h3><p>Varsity and JV program information, schedules and updates.</p><span className="card-link">Explore girls&apos; soccer →</span></Link>
    <Link className="card" href="/shop"><span className="card-icon">▣</span><h3>Team Shop</h3><p>Find spirit wear, team gear, and ordering information.</p><span className="card-link">Visit the shop →</span></Link></div>
  </section>
  <section className="dark-band"><div className="wrap band-content"><div><div className="eyebrow">BUILDING OUR PROGRAM</div><h2>Support St. Luke&apos;s Soccer</h2><p>Partner with our program through business sponsorships and community support.</p></div><Link href="/sponsors" className="button">Explore Sponsorships →</Link></div></section>
  <section className="wrap section"><div className="eyebrow red">OUR FOUNDATION</div><h2>Be better each day.</h2><div className="pillars"><div><strong>Accountability</strong><p>Own our responsibilities.</p></div><div><strong>Consistency</strong><p>Bring our best every day.</p></div><div><strong>Development</strong><p>Grow as players and people.</p></div></div></section>
</> }
