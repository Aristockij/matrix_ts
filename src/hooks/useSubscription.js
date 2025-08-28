import { useMutation } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";

export function useSubscription() {
  return useMutation({
    mutationKey: ["subscription"],
    mutationFn: (val) => {
      return axiosClient.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/news/subscribe`,
        val
      );
    },
  });
}
