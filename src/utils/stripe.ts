import type Stripe from "stripe";

let stripeSingleton: Stripe | null = null;

export async function getStripe(): Promise<Stripe> {
  if (stripeSingleton) return stripeSingleton;
  const { default: StripeCtor } = await import("stripe");
  const key = process.env.STRIPE_SECRET;
  if (!key) throw new Error("STRIPE_SECRET is not set at runtime");
  stripeSingleton = new StripeCtor(key);
  return stripeSingleton;
}
