import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      price,
      email,
      offerId,
      redirectURL = "/profile?data=3",
    } = await request.json();

    const shopId = process.env.UKASSA_ID;
    const secretKey = process.env.UKASSA_SECRET;

    const base = process.env.PUBLIC_URL!;
    const target = new URL(redirectURL, base);

    const body = {
      amount: { value: price, currency: "RUB" },
      capture: true,
      confirmation: {
        type: "redirect",
        return_url: target.toString(),
      },
      description: `Order ${offerId}`,
      metadata: { offerId, email },
    };

    const { data: payment } = await axios.post(
      "https://api.yookassa.ru/v3/payments",
      body,
      {
        headers: {
          "Idempotence-Key": crypto.randomUUID(),
          "Content-Type": "application/json",
          Authorization:
            "Basic " + Buffer.from(`${shopId}:${secretKey}`).toString("base64"),
        },
      }
    );

    return NextResponse.json({
      id: payment.id,
      offerId,
      price,
      email,
      url: payment.confirmation.confirmation_url,
    });
  } catch (err: unknown) {
    const e = err as AxiosError<any> & {
      name?: string;
      message?: string;
      stack?: string;
    };

    console.error("checkout_ukassa error:", err);

    return NextResponse.json(
      { error: e },
      { status: e?.response?.status ?? 500 }
    );
  }
}
