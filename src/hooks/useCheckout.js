import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";

const postCheckout = async (data) => {
  const res = await axiosClient.post("/checkout", data);

  return res.data;
};

export const useCheckout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postCheckout,
    onSuccess: (checkout) => {
      queryClient.setQueryData(["checkout"], checkout);
    },
    onError: (err) => console.log("ошибка при оплате: ", err),
  });
};
