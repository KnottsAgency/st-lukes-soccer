-- Run once in the Supabase SQL Editor AFTER creating the project.
-- Staff accounts must be created via Supabase Auth before adding their UUID below.
create table if not exists public.sponsor_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);
create table if not exists public.sponsorship_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  company_name text not null check (char_length(company_name) between 1 and 150),
  contact_name text not null check (char_length(contact_name) between 1 and 120),
  email text not null,
  phone text,
  address text,
  package_type text not null check (package_type in ('presenting','platinum','gold','silver','bronze','fence','supporter','donation')),
  amount_cents integer not null check (amount_cents between 100 and 10000000),
  player_to_credit text,
  notes text,
  status text not null default 'submitted' check (status in ('submitted','contacted','approved','paid','declined')),
  paid_at timestamptz
);
create index if not exists sponsorship_submissions_created_idx on public.sponsorship_submissions (created_at desc);
create index if not exists sponsorship_submissions_status_idx on public.sponsorship_submissions (status);
alter table public.sponsor_admins enable row level security;
alter table public.sponsorship_submissions enable row level security;
revoke all on public.sponsor_admins from anon, authenticated;
revoke all on public.sponsorship_submissions from anon, authenticated;
grant select on public.sponsor_admins to authenticated;
grant select on public.sponsorship_submissions to authenticated;
grant update (status, paid_at) on public.sponsorship_submissions to authenticated;
drop policy if exists "Read own staff membership" on public.sponsor_admins;
create policy "Read own staff membership" on public.sponsor_admins for select to authenticated
using ((select auth.uid()) = user_id);
drop policy if exists "Staff view sponsor submissions" on public.sponsorship_submissions;
create policy "Staff view sponsor submissions" on public.sponsorship_submissions for select to authenticated
using (exists (select 1 from public.sponsor_admins a where a.user_id=(select auth.uid())));
drop policy if exists "Staff update sponsor submissions" on public.sponsorship_submissions;
create policy "Staff update sponsor submissions" on public.sponsorship_submissions for update to authenticated
using (exists (select 1 from public.sponsor_admins a where a.user_id=(select auth.uid())))
with check (exists (select 1 from public.sponsor_admins a where a.user_id=(select auth.uid())));
-- Sponsor applications are inserted only through the server route with a secret service-role key.
-- There are NO anonymous select, update, or insert policies.
-- To authorize an admin, after creating their Auth account and identifying its user id:
-- insert into public.sponsor_admins(user_id) values ('REPLACE-WITH-AUTH-USER-UUID');
