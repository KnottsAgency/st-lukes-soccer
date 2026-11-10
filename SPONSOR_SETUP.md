# 2027 Sponsorship Application — deployment checklist

**Status:** UI and backend code prepared. Applications remain disabled until all settings below are configured, tested, and approved by the school.

1. Obtain school approval for sponsorship collection, sponsor contact details, and any player-to-credit names.
2. Create a dedicated Supabase project under an organization-owned account. Run `supabase/sponsorships.sql` in its SQL Editor.
3. Create an Auth user for an authorized adult staff member; get their UUID from Auth > Users. Insert UUID into `public.sponsor_admins` using the commented SQL statement.
4. In Supabase Auth URL Configuration, add the deployed origin and callback `https://YOUR-DOMAIN/auth/callback` to redirect allowlist. Enable email OTP/magic link.
5. Create Cloudflare Turnstile site key and secret for the live domain.
6. Add the five environment variables from `.env.example` to Vercel. Treat `SUPABASE_SERVICE_ROLE_KEY` and `TURNSTILE_SECRET_KEY` as secrets; NEVER use NEXT_PUBLIC_ on them, place in GitHub, or send in chat.
7. Redeploy in Vercel so the server-rendered application form can enable. Test a sample sponsor request, verify it appears in `/admin`, and test marking it Approved and Paid.
8. Review data retention, authorization, privacy notice, email delivery, and staff process before sharing the form publicly.
9. Do not invite player/family accounts until separate approvals and access policies are implemented.

The `/admin` dashboard is behind Supabase authentication and a database-controlled staff whitelist. The API uses mandatory Cloudflare Turnstile verification before inserting via a server-only service role. Public users have no read access to applications. Package limits shown in the dashboard are indicative; staff must confirm actual availability before accepting a sponsorship. The dashboard currently tracks payment status manually (there is no checkout integration or automatic sponsor email). Mark Paid only after confirming receipt through official school channels.

Payment options: Check (mailed or dropped off at the school) or Venmo (@StLukes-EpiscopalSchool). Staff should verify the school's official Venmo recipient and check delivery instructions before directing sponsors to pay. The method chosen on the form is a preference, not proof of payment. If the SQL was previously installed, rerun the revised SQL or execute the new ALTER TABLE statement before enabling applications.
