import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";

export function useProfileUpdate(options) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (val) => {
      return axiosClient.post(
        `${process.env.NEXT_PUBLIC_BASEURL}/profile`,
        val
      );
    },
    onError: (error) => {
      console.log("server error: ", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
    ...options,
  });
}
