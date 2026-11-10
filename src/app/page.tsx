
import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    name: "Varsity Boys",
    division: "BOYS' SOCCER",
    description: "Compete. Lead. Set the standard.",
    href: "/boys",
  },
  {
    name: "JV Boys",
    division: "BOYS' SOCCER",
    description: "Develop skills and prepare for varsity.",
    href: "/boys",
  },
  {
    name: "Middle School Boys",
    division: "BOYS' SOCCER",
    description: "Build the foundation for the future.",
    href: "/boys",
  },
  {
    name: "Varsity Girls",
    division: "GIRLS' SOCCER",
    description: "Compete with purpose and pride.",
    href: "/girls",
  },
  {
    name: "JV Girls",
    division: "GIRLS' SOCCER",
    description: "Grow together and build confidence.",
    href: "/girls",
  },
];

const values = [
  {
    number: "01",
    title: "Accountability",
    description:
      "Taking responsibility for our actions, our teammates, and our commitment to the program.",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "Showing up with purpose and demonstrating the habits that create lasting success.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Continuously growing as players, teammates, leaders, and individuals.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(115deg, #111115 45%, #31090f 100%)",
          color: "#ffffff",
          padding: "90px 0",
          overflow: "hidden",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "45px",
          }}
        >
          <div style={{ flex: "1 1 340px" }}>
            <div
              className="eyebrow"
              style={{ color: "#f0a0aa" }}
            >
              ST. LUKE&apos;S SOCCER PROGRAM
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 6vw, 76px)",
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: "-2px",
                margin: "24px 0",
                color: "#ffffff",
              }}
            >
              ONE PROGRAM.
              <br />
              <span style={{ color: "#e3263e" }}>
                ONE FAMILY.
              </span>
              <br />
              ONE GOAL.
            </h1>

            <p
              style={{
                color: "#d4d4d8",
                maxWidth: "520px",
                fontSize: "17px",
                lineHeight: 1.8,
              }}
            >
              Developing players, building leaders, and
              strengthening our community through the
              game of soccer.
            </p>

            <div
              className="actions"
              style={{ marginTop: "30px" }}
            >
              <Link href="/login" className="button">
                Family Portal →
              </Link>

              <Link
                href="/sponsors"
                className="button"
                style={{
                  background: "transparent",
                  border: "1px solid #777",
                }}
              >
                Become a Sponsor →
              </Link>
            </div>
          </div>

          <div
            style={{
              flex: "1 1 260px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "#ffffff",
                padding: "22px",
                borderRadius: "20px",
                boxShadow:
                  "0 20px 70px rgba(0,0,0,0.35)",
                width: "100%",
                maxWidth: "440px",
              }}
            >
              <Image
                src="/Cat.png1_.jpg"
                alt="St. Luke's Wildcats Logo"
                width={410}
                height={380}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM INTRODUCTION */}
      <section className="wrap section">
        <div className="eyebrow red">
          WELCOME TO ST. LUKE&apos;S SOCCER
        </div>

        <h2>One Program. Five Teams.</h2>

        <p
          style={{
            maxWidth: "750px",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          From middle school through varsity, our
          boys&apos; and girls&apos; soccer programs
          share a commitment to accountability,
          consistency, and development. Our mission
          is to develop student-athletes who represent
          St. Luke&apos;s with character, effort,
          and pride.
        </p>

        <div
          className="cards"
          style={{ marginTop: "35px" }}
        >
          {teams.map((team) => (
            <div className="card" key={team.name}>
              <div className="eyebrow red">
                {team.division}
              </div>

              <h3>{team.name}</h3>

              <p>{team.description}</p>

              <Link
                className="card-link"
                href={team.href}
              >
                Explore Team →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM VALUES */}
      <section
        style={{
          background: "#17171b",
          color: "#ffffff",
          padding: "75px 0",
        }}
      >
        <div className="wrap">
          <div
            className="eyebrow"
            style={{ color: "#ef9eaa" }}
          >
            OUR FOUNDATION
          </div>

          <h2
            style={{
              color: "#ffffff",
              marginBottom: "15px",
            }}
          >
            Be Better Each Day.
          </h2>

          <p
            style={{
              color: "#c8c8ce",
              maxWidth: "650px",
            }}
          >
            Three pillars guide our approach to soccer
            and personal growth.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "22px",
              marginTop: "35px",
            }}
          >
            {values.map((value) => (
              <div
                key={value.title}
                style={{
                  background: "#24242a",
                  padding: "28px",
                  borderRadius: "12px",
                  borderTop: "3px solid #ce152b",
                }}
              >
                <div
                  style={{
                    color: "#e32b40",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  {value.number}
                </div>

                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "23px",
                    margin: "14px 0",
                  }}
                >
                  {value.title}
                </h3>

                <p
                  style={{
                    color: "#c8c8ce",
                    lineHeight: 1.7,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY RESOURCES */}
      <section className="wrap section">
        <div className="eyebrow red">
          FOR PLAYERS &amp; FAMILIES
        </div>

        <h2>Everything You Need. One Place.</h2>

        <p
          style={{
            maxWidth: "700px",
            lineHeight: 1.8,
            color: "#555",
          }}
        >
          Stay connected with team schedules,
          announcements, required gear, and
          important information throughout the season.
        </p>

        <div className="cards">
          <div className="card">
            <h3>Schedules &amp; Events</h3>
            <p>
              Find upcoming games, important dates,
              and program events.
            </p>
            <Link
              href="/schedules"
              className="card-link"
            >
              View Schedules →
            </Link>
          </div>

          <div className="card">
            <h3>Team Shop</h3>
            <p>
              Find required training gear, team
              apparel, and St. Luke&apos;s merchandise.
            </p>
            <Link
              href="/shop"
              className="card-link"
            >
              Shop Now →
            </Link>
          </div>

          <div className="card">
            <h3>Family Portal</h3>
            <p>
              Private team announcements, resources,
              and information for approved families.
            </p>
            <Link
              href="/login"
              className="card-link"
            >
              Family Login →
            </Link>
          </div>
        </div>
      </section>

      {/* SPONSORSHIP SECTION */}
      <section
        style={{
          background: "#b51228",
          color: "#ffffff",
          padding: "65px 0",
        }}
      >
        <div
          className="wrap"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "25px",
          }}
        >
          <div style={{ maxWidth: "650px" }}>
            <div
              className="eyebrow"
              style={{ color: "#ffe3e6" }}
            >
              SUPPORT OUR PROGRAM
            </div>

            <h2 style={{ color: "#ffffff" }}>
              Become a St. Luke&apos;s Soccer Sponsor.
            </h2>

            <p style={{ lineHeight: 1.8 }}>
              Partner with our soccer program and help
              create opportunities for student-athletes
              while promoting your business to the
              St. Luke&apos;s community.
            </p>
          </div>

          <Link
            href="/sponsors"
            className="button"
            style={{
              background: "#ffffff",
              color: "#a70d21",
            }}
          >
            Explore Sponsorships →
          </Link>
        </div>
      </section>
    </>
  );
}
