"use client";
import { useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  async function requestLink(e: React.FormEvent) {
    e.preventDefault();
    const client = getSupabaseBrowserClient();
    if (!client) { setMessage("Admin sign-in has not been configured yet."); return; }
    setBusy(true);
    const { error } = await client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin + "/auth/callback", shouldCreateUser: false },
    });
    setBusy(false);
    setMessage(error ? "Unable to send sign-in link. Contact the program administrator." : "If this is an approved account, check your email for a sign-in link.");
  }
  return (
    <><section className="page-hero"><div className="wrap"><div className="eyebrow">STAFF ONLY</div><h1>Sponsorship Administration</h1><p>Secure access for authorized St. Luke&apos;s Soccer staff.</p></div></section>
    <section className="wrap section"><div className="form-panel"><h2>Staff sign-in</h2><p>Only accounts approved by the program can access sponsor records.</p>
      <form onSubmit={requestLink} className="stack-form"><label htmlFor="staff-email">Staff email</label><input id="staff-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required maxLength={160} autoComplete="email"/><button className="button" disabled={busy}>{busy?"Sending...":"Send secure sign-in link"}</button></form>
      {message && <p role="status" className="notice">{message}</p>}
    </div></section></>
  );
}
