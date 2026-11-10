import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="page-hero"><div className="wrap"><div className="eyebrow">ST. LUKE&apos;S SOCCER</div><h1>Sponsor St. Luke's Soccer</h1><p>Support our student-athletes and connect with the St. Luke's community.</p></div></section>
      <section className="wrap section"><div className="eyebrow red">SPONSORSHIP OPPORTUNITIES</div><h2>Partner With Our Program</h2><p>These are proposed sponsorship packages; final availability, artwork requirements, and payment instructions will be confirmed before orders open.</p><div className="cards"><div className="card"><h3>Fence Sign</h3><p style={{fontSize:"24px",fontWeight:800,color:"#ad1628"}}>$325</p><p>Program signage opportunity.</p></div><div className="card"><h3>Triangle Sign</h3><p style={{fontSize:"24px",fontWeight:800,color:"#ad1628"}}>$500</p><p>Additional on-site signage opportunity.</p></div><div className="card"><h3>Apparel Logo</h3><p>Small: $250 · Medium: $500 · Large: $750</p><p>Proposed logo placement packages, pending approval.</p></div></div><div className="notice"><p><strong>Interested in sponsoring?</strong> Please use the contact page to request current package details. Online checkout is not available yet.</p><Link href="/contact" className="card-link">Contact the program →</Link></div></section>
    </>
  );
}
