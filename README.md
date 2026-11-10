# St. Luke's Soccer — Phase 1 Starter

A public-facing, mobile-friendly Next.js starter for the boys' and girls' soccer programs. This is a **development preview**, not an official deployed school site.

## Included
- Red/black/white homepage, public program pages, navigation, and sponsor package placeholders
- Routes: `/`, `/about`, `/boys`, `/girls`, `/schedules`, `/shop`, `/sponsors`, `/contact`, `/login`, `/portal`, `/admin`
- Responsive design and temporary `noindex` metadata

## Not implemented
- Authentication / sign-up (all login and portal routes are placeholders)
- Team authorization and staff approvals
- Data storage / private team content
- Real payments, ordering, email, or sponsor intake

**Never place student information on placeholder pages or expose private information before server-side permission checks and database RLS are tested.**

## Get started
1. Install Node.js 20.9+ if necessary.
2. Extract the zip and open a terminal in the `st-lukes-soccer-starter` directory.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit `http://localhost:3000`.
6. After school approval, connect a new GitHub repository and deploy a private/staging project on Vercel.

## Planned secure data model
- `profiles` (linked to Auth user)
- `teams` (varsity boys, JV boys, varsity girls, JV girls; configurable)
- `team_memberships` (user, team, role, approved_by, approved_at, status)
- `announcements` (team-owned; audience rules)
- `events` (team-owned or public)
- `documents` (private storage where appropriate)
- `sponsorship_packages`, `sponsors`, `sponsorship_orders`
- `products`, `orders`, `order_items`

**Security requirements:** use Supabase Auth and row-level security; admin-controlled membership approval; deny-by-default policies; private storage buckets for restricted files; verified server-side access checks for every protected route and API; never store payment card data directly; use Stripe-hosted checkout and verified webhooks when enabled.

## Rollout order
1. School/brand approval and staff ownership.
2. Public content and visual approval.
3. Supabase Auth + membership approvals + RLS and authorization tests.
4. Private portal content management.
5. Merchandise/sponsorship integrations and secure checkout.

## Branding note
The shield-like `SL` initials are a temporary typographic mark, **not** an official St. Luke's logo. Replace only after receiving permission and an approved asset.
