import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><div className="eyebrow">ST. LUKE&apos;S SOCCER</div><h1>Family Portal</h1><p>A secure home for approved players, families, and coaches.</p></div></section>
      <section className="wrap section"><div className="eyebrow red">COMING SOON</div><h2>Private Team Access</h2><p style={{maxWidth:"720px",lineHeight:1.8}}>We&apos;re preparing verified family accounts with access to team-specific announcements, calendars, required gear, and documents. Registration is not open yet. No student accounts or personal information are being collected on this page.</p><div className="notice"><p><strong>Privacy first:</strong> Team access will require approval and server-side permissions before launch.</p></div><div className="actions"><Link href="/boys" className="card-link">Boys soccer →</Link><Link href="/girls" className="card-link">Girls soccer →</Link></div></section>
    </>
  );
}
