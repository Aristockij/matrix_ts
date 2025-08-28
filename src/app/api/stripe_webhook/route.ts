export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { getStripe } from "@/utils/stripe";
import { NextResponse } from "next/server";

import type Stripe from "stripe";

// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;
const ENABLE_STRIPE = Boolean(
  process.env.STRIPE_SECRET && process.env.STRIPE_WEBHOOK_SECRET
);

export async function POST(req: Request) {
  if (!ENABLE_STRIPE) return new Response("ok", { status: 200 });

  const sig = req.headers.get("stripe-signature")!;
  const rawBody = await req.text();

  let event: Stripe.Event;

  if (!sig) {
    console.warn("stripe_webhook: no signature header");
    return new Response("ok", { status: 200 });
  }

  try {
    const stripe = await getStripe();
    const whsec = process.env.STRIPE_WEBHOOK_SECRET!;

    event = stripe.webhooks.constructEvent(rawBody, sig, whsec);
  } catch (e: any) {
    console.error("stripe_webhook verify error:", e?.message);
    // 2xx, чтобы Stripe не заспамил ретраями
    return new Response("ok", { status: 200 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const offerId = session.metadata?.offerId;
    const email = session.metadata?.email;

    const payload = {
      offerId: offerId,
      email: email,
    };

    // await fetch(process.env.NEXT_PUBLIC_BASEURL + "/checkout", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });

    try {
      const base = process.env.NEXT_PUBLIC_BASEURL!;
      const url = new URL("/checkout", base).toString();
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          offerId,
          email,
          sessionId: session.id,
          eventId: event.id,
        }),
      });
    } catch (e: any) {
      console.error("internal /checkout call failed:", e?.message);
    }
  }

  return NextResponse.json({ received: true });
}
