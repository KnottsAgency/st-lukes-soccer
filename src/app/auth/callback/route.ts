import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const origin = request.nextUrl.origin;
  const code = request.nextUrl.searchParams.get("code");
  if (!code) return NextResponse.redirect(new URL("/admin/login?error=invalid", origin));
  const client = await getSupabaseServerClient();
  if (!client) return NextResponse.redirect(new URL("/admin/login?error=config", origin));
  const { error } = await client.auth.exchangeCodeForSession(code);
  return NextResponse.redirect(
    new URL(error ? "/admin/login?error=invalid" : "/admin", origin)
  );
}
