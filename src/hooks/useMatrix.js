import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";

export function useMatrixPreview(options) {
  return useMutation({
    mutationFn: (val) =>
      axios.post(`${process.env.NEXT_PUBLIC_BASEURL}/matrix/preview`, val),

    onError: (error) => {
      console.log("server error: ", error);
    },
    ...options,
  });
}

export function useMatrix(options) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (val) => {
      return axiosClient.post(`${process.env.NEXT_PUBLIC_BASEURL}/matrix`, val);
    },
    onError: (error) => {
      console.log("server error: ", error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["getItems"] });
    },
    ...options,
  });
}
