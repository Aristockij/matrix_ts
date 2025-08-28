import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";
import { useAuthStore } from "@/store/authState";

const fetchCalc = async (id) => {
  const token = useAuthStore.getState().tokens?.accessToken;

  if (!token) {
    throw new Error("no access token found");
  }

  const response = await axiosClient.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/user/calculations/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export function useGetCalculationDetail(id) {
  const token = useAuthStore((state) => state.tokens);

  return useQuery({
    queryKey: ["calculationDetail"],
    queryFn: () => fetchCalc(id),
    enabled: !!token,
  });
}
