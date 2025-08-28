export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getStripe } from "@/utils/stripe";
const ENABLE_STRIPE = process.env.BUILD_TYPE === "en";

export async function POST(request: Request) {
  if (!ENABLE_STRIPE) return new Response("Not enabled", { status: 404 });

  try {
    const {
      price,
      email,
      offerId,
      redirectURL = "profile?data=2",
    } = await request.json();

    const stripe = await getStripe();
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price,
          quantity: 1,
        },
      ],

      mode: "payment",
      success_url: `${process.env.PUBLIC_URL}/${redirectURL}`,
      cancel_url: `${process.env.PUBLIC_URL}/`,
      automatic_tax: { enabled: true },
      customer_email: email,
      customer_creation: "if_required",
      metadata: {
        email,
        offerId: offerId,
      },
    });
    return NextResponse.json({ id: session.id, url: session.url, email });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    );
  }
}
