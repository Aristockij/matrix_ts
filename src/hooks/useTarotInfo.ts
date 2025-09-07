import axiosClient from "@/helpers/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useTarotInfo = ({ ...options }) => {
  return useMutation({
    mutationFn: (val) => {
      console.log("запрос: ", val);
      return axiosClient.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/taro/preview`,
        val
      );
    },
    ...options,
  });
};
