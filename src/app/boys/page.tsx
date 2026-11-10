
import Link from "next/link";

const teams = [
  {
    name: "Varsity Boys",
    description:
      "Our varsity program focuses on competing at the highest level while developing leadership, accountability, and teamwork.",
    level: "HIGH SCHOOL",
  },
  {
    name: "JV Boys",
    description:
      "Our junior varsity program helps players develop their technical abilities, tactical understanding, and readiness for varsity soccer.",
    level: "HIGH SCHOOL",
  },
  {
    name: "Middle School Boys",
    description:
      "Our middle school program introduces players to the expectations and playing philosophy of St. Luke's Soccer while building a strong foundation for the future.",
    level: "MIDDLE SCHOOL",
  },
];

export default function BoysSoccerPage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">ST. LUKE&apos;S SOCCER</div>
          <h1>Boys&apos; Soccer</h1>
          <p>
            One program built on accountability, consistency, and
            development. From middle school through varsity, our goal
            is to help every player grow on and off the field.
          </p>
        </div>
      </section>

      <section className="wrap section">
        <div className="eyebrow red">OUR TEAMS</div>
        <h2>Three Teams. One Program.</h2>

        <div className="cards">
          {teams.map((team) => (
            <div className="card" key={team.name}>
              <div className="eyebrow red">{team.level}</div>
              <h3>{team.name}</h3>
              <p>{team.description}</p>
              <Link href="/schedules" className="card-link">
                View Schedules →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="dark-band">
        <div className="wrap band-content">
          <div>
            <div className="eyebrow">OUR PROGRAM PHILOSOPHY</div>
            <h2>Be Better Each Day.</h2>
            <p>
              We strive to develop players who demonstrate
              accountability, consistency, and a commitment to
              improvement in everything they do.
            </p>
          </div>
          <Link href="/about" className="button">
            About Our Program →
          </Link>
        </div>
      </section>

      <section className="wrap section">
        <div className="eyebrow red">PLAYERS &amp; FAMILIES</div>
        <h2>Stay Connected.</h2>
        <p>
          Our family portal will provide access to team announcements,
          important dates, required gear, and team-specific information.
        </p>

        <div className="actions">
          <Link href="/login" className="button">
            Family Portal →
          </Link>
          <Link
            href="/shop"
            className="button"
            style={{ background: "#202127" }}
          >
            Team Shop →
          </Link>
        </div>
      </section>
    </>
  );
}
