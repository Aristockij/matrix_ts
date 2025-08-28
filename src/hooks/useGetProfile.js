import { useQuery } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";
import { useAuthStore } from "@/store/authState";

const fetchProfile = async () => {
  const token = useAuthStore.getState().tokens?.accessToken;

  if (!token) {
    throw new Error("no access token found");
  }

  const response = await axiosClient.get(
    `${process.env.NEXT_PUBLIC_BASEURL}/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export function useGetProfile() {
  const token = useAuthStore((state) => state.tokens);

  return useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(),
    enabled: !!token,
  });
}
