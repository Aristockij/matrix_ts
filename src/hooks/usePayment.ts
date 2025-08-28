"use client";

import { useCheckoutStripe } from "./useCheckoutStripe";
import { useCheckoutUkassa } from "./useCheckoutUkassa";

export const usePayment = () => {
  const {
    mutate: checkoutStripe,
    isSuccess: successStripe,
    isError: errorStripe,
  } = useCheckoutStripe();

  const {
    mutate: checkoutUkassa,
    isSuccess: successUkassa,
    isError: errorUkassa,
  } = useCheckoutUkassa();

  return {
    checkoutStripe,
    errorStripe,
    checkoutUkassa,
    errorUkassa,
  };
};
