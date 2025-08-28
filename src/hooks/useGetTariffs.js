import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export function useGetTariffs() {
  return useQuery({
    queryKey: ["getTariffs"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASEURL}/offers`
      );
      return response.data;
    },
  });
}
