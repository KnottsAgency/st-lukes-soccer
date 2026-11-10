import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "St. Luke's Soccer", template: "%s | St. Luke's Soccer" },
  description: "Official soccer program hub for St. Luke's boys' and girls' soccer.",
  robots: { index: false, follow: false }, // Keep staging out of search engines until school approves launch.
};

const links = [
  ["About", "/about"], ["Boys", "/boys"], ["Girls", "/girls"],
  ["Schedules", "/schedules"], ["Shop", "/shop"],
  ["Sponsors", "/sponsors"], ["Contact", "/contact"],
];
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <header className="header"><div className="wrap nav">
      <Link href="/" className="brand"><span className="brand-mark">SL</span><span>ST. LUKE&apos;S <small>SOCCER</small></span></Link>
      <nav aria-label="Primary navigation" className="navlinks">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link href="/login" className="button button-small">Family Login</Link>
    </div></header>
    <main>{children}</main>
    <footer className="footer"><div className="wrap footer-inner"><span>St. Luke&apos;s Soccer · Boys &amp; Girls Programs</span><span>Independent development preview · Not yet an official school website</span></div></footer>
  </body></html>;
}
