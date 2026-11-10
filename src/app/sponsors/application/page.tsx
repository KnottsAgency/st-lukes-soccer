import { SponsorApplication } from "./sponsor-application";

export default function ApplicationPage() {
  const enabled = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.SUPABASE_SERVICE_ROLE_KEY &&
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY &&
    process.env.TURNSTILE_SECRET_KEY
  );
  return <><section className="page-hero"><div className="wrap"><div className="eyebrow">2027 ST. LUKE&apos;S SOCCER</div><h1>Sponsor Application</h1><p>Choose a sponsorship and identify a player to credit for fundraising.</p></div></section>
  <section className="wrap section"><SponsorApplication enabled={enabled} siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY||""}/></section></>;
}
