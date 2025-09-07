import axiosClient from "@/helpers/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export const useGetAnswer = ({ ...options }) => {
  return useMutation({
    mutationFn: (val) => {
      return axiosClient.post(`${process.env.NEXT_PUBLIC_BASEURL}/taro`, val);
    },
    onSuccess: (data) => {
      options.router.push(
        `/taro/${data.data.id}?serviceCode=${options.serviceCode}&id=${data.data.id}&paydItem=true`
      );
    },
    onError: (error) => {
      console.log("server error: ", error);
    },
  });
};
