import Link from "next/link";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { AdminDashboard } from "./sponsor-dashboard";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const client = await getSupabaseServerClient();
  if (!client) return <section className="wrap section"><h1>Staff dashboard</h1><p>Secure database connection is not configured yet.</p></section>;

  const { data: { user } } = await client.auth.getUser();
  if (!user) return <section className="wrap section"><h1>Staff dashboard</h1><p>Sign in with an approved staff account.</p><Link className="button" href="/admin/login">Staff sign-in</Link></section>;

  const { data: admin } = await client.from("sponsor_admins").select("user_id").eq("user_id", user.id).maybeSingle();
  if (!admin) return <section className="wrap section"><h1>Access restricted</h1><p>Your account has not been approved to view sponsorship records.</p></section>;

  const { data, error } = await client.from("sponsorship_submissions")
    .select("id,created_at,company_name,contact_name,email,phone,package_type,amount_cents,player_to_credit,status,paid_at")
    .order("created_at", { ascending: false }).limit(500);

  if (error) return <section className="wrap section"><h1>Staff dashboard</h1><p>Unable to load sponsor records. Check the database setup.</p></section>;
  return <AdminDashboard initialRecords={data ?? []} />;
}
