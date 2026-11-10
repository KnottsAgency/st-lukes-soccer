import Link from "next/link";

const packages = [
  {
    name: "Presenting Sponsor",
    price: 1500,
    availability: "1 available",
    benefits: [
      "Exclusive large front logo on pregame sponsor shirt",
      "Preferred field fence signage placement",
      "Two premium walk-up yard signs",
      "Two regular-season home game passes*",
      "Featured social media sponsor recognition",
      "Category exclusivity when available",
    ],
  },
  {
    name: "Platinum",
    price: 1000,
    availability: "2 available",
    benefits: [
      "Premier back logo on pregame sponsor shirt",
      "Preferred field fence signage placement",
      "Two premium walk-up yard signs",
      "Two regular-season home game passes*",
      "Featured social media sponsor recognition",
    ],
  },
  {
    name: "Gold",
    price: 750,
    availability: "4 available",
    benefits: [
      "Large back logo on pregame sponsor shirt",
      "Field fence sign",
      "One walk-up yard sign",
      "Two regular-season home game passes*",
      "Individual social media sponsor recognition",
    ],
  },
  {
    name: "Silver",
    price: 500,
    availability: "Shared limit of 12 with Bronze",
    benefits: [
      "Medium back logo on pregame sponsor shirt",
      "Field fence sign",
      "One walk-up yard sign",
      "Social media sponsor recognition",
    ],
  },
  {
    name: "Bronze",
    price: 250,
    availability: "Shared limit of 12 with Silver",
    benefits: [
      "Medium back logo on pregame sponsor shirt",
      "Social media sponsor recognition",
    ],
  },
];

export default function SponsorsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">2027 ST. LUKE&apos;S SOCCER</div>
          <h1>Become a Sponsor</h1>
          <p>Support our boys&apos; and girls&apos; soccer program while promoting your business in the St. Luke&apos;s community.</p>
        </div>
      </section>

      <section className="wrap section">
        <div className="eyebrow red">2027 SPONSORSHIP PACKAGES</div>
        <h2>Choose Your Sponsorship Level</h2>
        <p style={{ maxWidth: 780 }}>
          Every package supports the soccer program. Pricing reflects the updated 2027 sponsorship proposal;
          sponsorships and placements are subject to program confirmation.
        </p>
        <div className="cards" style={{ marginTop: 28 }}>
          {packages.map((tier) => (
            <article className="card" key={tier.name}>
              <div className="eyebrow red">{tier.availability}</div>
              <h3>{tier.name}</h3>
              <p style={{ fontSize: 30, fontWeight: 900, color: "#ad1628", marginBottom: 16 }}>
                ${tier.price.toLocaleString("en-US")}
              </p>
              <ul style={{ paddingLeft: 20, fontSize: 14, lineHeight: 1.8 }}>
                {tier.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p style={{ fontSize: 13, color: "#636774", marginTop: 20 }}>
          *Proposed game passes apply only to St. Luke&apos;s Soccer regular-season home matches,
          not postseason or AHSAA playoff contests. Silver and Bronze share 12 total spots.
        </p>
      </section>

      <section className="wrap section" style={{ paddingTop: 8 }}>
        <div className="eyebrow red">ADDITIONAL OPPORTUNITIES</div>
        <h2>Individual Sponsorships</h2>
        <div className="cards">
          <div className="card"><h3>Field Fence Sign</h3><p style={{ fontSize: 26, fontWeight: 900, color: "#ad1628" }}>$325</p><p>Business sign displayed along the athletic field during the sponsorship period.</p></div>
          <div className="card"><h3>Soccer Supporter</h3><p style={{ fontSize: 26, fontWeight: 900, color: "#ad1628" }}>$250</p><p>Name on a shared soccer supporter sign and recognition in a shared social media post.</p></div>
          <div className="card"><h3>Donation</h3><p style={{ fontSize: 26, fontWeight: 900, color: "#ad1628" }}>Any amount</p><p>Support the program without purchasing a sponsorship package.</p></div>
        </div>
        <div className="notice">
          <p><Link href="/sponsors/application" className="button">Request a Sponsorship →</Link></p>
          <p><strong>December 20 deadline:</strong> Sponsorship payments and applicable shirt artwork must be received by December 20 to count toward the 2027 player fundraising challenge.</p>
          <p><strong>Interested in a package?</strong> Review the application page or contact program staff. Requests do not reserve placements; online checkout is not available yet.</p>
          <Link href="/contact" className="card-link">Contact the program →</Link>
        </div>
      </section>
    </>
  );
}
