import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCheckoutUkassa = () => {
  return useMutation({
    mutationKey: ["ukassa_checkout"],
    mutationFn: async (vars: {
      price: string | number;
      email: string;
      offerId: string | number;
      redirectURL?: string | undefined;
    }) => {
      const { data } = await axios.post("/api/checkout_ukassa", vars);
      return data as {
        id: string | number;
        status: string;
        amount: string | number;
        confirmation_token: string;
        redirectURL: string | undefined;
        url: string;
      };
    },
    onSuccess: (data) => {
      if (data.url) window.location.href = data.url;
    },
    onError: (e: any) => {
      console.error(
        "YooKassa checkout error",
        e,
        e?.response?.data || e?.message
      );
    },
  });
};
