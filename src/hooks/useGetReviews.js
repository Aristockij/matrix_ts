import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useGetReviews() {
  return useQuery({
    queryKey: ["getReviews"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASEURL}/reviews`
      );
      return response.data;
    },
  });
}
