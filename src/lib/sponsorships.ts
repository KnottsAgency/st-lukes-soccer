export const sponsorshipOptions = [
  { value: "presenting", label: "Presenting Sponsor", price: 1500, limit: 1 },
  { value: "platinum", label: "Platinum", price: 1000, limit: 2 },
  { value: "gold", label: "Gold", price: 750, limit: 4 },
  { value: "silver", label: "Silver", price: 500, limit: 12 },
  { value: "bronze", label: "Bronze", price: 250, limit: 12 },
  { value: "fence", label: "Field Fence Sign", price: 325, limit: null },
  { value: "supporter", label: "Soccer Supporter", price: 250, limit: null },
  { value: "donation", label: "Donation", price: null, limit: null },
] as const;

export type SponsorshipType = (typeof sponsorshipOptions)[number]["value"];
export const sponsorshipConfigReady = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
);
