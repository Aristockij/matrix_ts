export const runtime = "nodejs";
import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const { event, object: payment } = payload;

    if (event !== "payment.succeeded") {
      return NextResponse.json({ ok: true });
    }

    const shopId = process.env.UKASSA_ID!;
    const secretKey = process.env.UKASSA_SECRET!;

    const { data: fresh } = await axios.get(
      `https://api.yookassa.ru/v3/payments/${payment.id}`,

      {
        headers: {
          "Idempotence-Key": crypto.randomUUID(),
          "Content-Type": "application/json",
          Authorization:
            "Basic " + Buffer.from(`${shopId}:${secretKey}`).toString("base64"),
        },
      }
    );
    if (fresh.status !== "succeeded") {
      // что-то не так — просто подтверждаем приём и выходим
      return NextResponse.json({ ok: true });
    }

    const meta = fresh.metadata ?? payment.metadata ?? {};
    const offerId = meta.offerId;
    const email = meta.email;

    await fetch(process.env.NEXT_PUBLIC_BASEURL + "/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ offerId, email }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    // Важно вернуть 200/204, иначе ЮKassa может ретраить; логируйте и чините отдельно
    console.error("YK webhook error:", e);
    return NextResponse.json({ ok: true });
  }
}
