import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCheckoutStripe = () => {
  return useMutation({
    mutationKey: ["tariffs_checkout"],
    mutationFn: async (vars: {
      price: string;
      email: string;
      offerId: string | number;
      redirectURL?: string | undefined;
    }) => {
      const { data } = await axios.post("/api/checkout_sessions", vars);
      return data as { id: string; url: string };
    },
    onSuccess: async (data) => {
      // Вариант 1 — прямой переход:
      if (data.url) window.location.href = data.url;

      // Вариант 2 — через Stripe.js:
      // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      // await stripe?.redirectToCheckout({ sessionId: data.id });
    },
    onError: (e: any) => {
      console.error("Stripe checkout error", e?.response?.data || e?.message);
    },
  });
};
