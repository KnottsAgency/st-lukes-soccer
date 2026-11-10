
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "St. Luke's Soccer",
    template: "%s | St. Luke's Soccer",
  },
  description:
    "Official hub for St. Luke's Boys and Girls Soccer programs, including schedules, announcements, team information, and sponsorship opportunities.",
  robots: {
    index: false,
    follow: false,
  },
};

const navigation = [
  { label: "About", href: "/about" },
  { label: "Boys", href: "/boys" },
  { label: "Girls", href: "/girls" },
  { label: "Schedules", href: "/schedules" },
  { label: "Shop", href: "/shop" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* WEBSITE HEADER */}
        <header className="header">
          <div className="wrap nav">
            {/* WILDCAT LOGO */}
            <Link href="/" className="brand">
              <Image
                src="/cat.png1_.jpg"
                alt="St. Luke's Wildcats Logo"
                width={65}
                height={60}
                style={{
                  objectFit: "contain",
                  height: "auto",
                }}
                priority
              />

              <span>
                ST. LUKE&apos;S
                <small>SOCCER</small>
              </span>
            </Link>

            {/* MAIN NAVIGATION */}
            <nav
              className="navlinks"
              aria-label="Main Navigation"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* FAMILY LOGIN */}
            <Link
              href="/login"
              className="button button-small"
            >
              Family Login
            </Link>
          </div>
        </header>

        {/* WEBSITE CONTENT */}
        <main>{children}</main>

        {/* WEBSITE FOOTER */}
        <footer className="footer">
          <div className="wrap footer-inner">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Image
                src="/cat.png1_.jpg"
                alt="St. Luke's Wildcats"
                width={60}
                height={55}
                style={{
                  objectFit: "contain",
                  height: "auto",
                }}
              />

              <div>
                <strong>ST. LUKE&apos;S SOCCER</strong>
                <p
                  style={{
                    margin: "4px 0 0",
                    fontSize: "13px",
                  }}
                >
                  Boys &amp; Girls Soccer Programs
                </p>
              </div>
            </div>

            <div>
              <p>
                Accountability. Consistency. Development.
              </p>
              <p style={{ fontSize: "12px" }}>
                Development preview — not yet an
                official school website.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
