import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";
import { useAuthStore } from "@/store/authState";

const postUserData = async (data) => {
  const res = await axiosClient.post("/auth/login", data).then((res) => {
    return {
      access_token: res.data.access_token,
      refresh_token: res.data.refresh_token,
    };
  });

  return res;
};

const setCookie = (name, value, maxAgeSeconds = 604800) => {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; secure; samesite=strict`;
};

export const useUserLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => postUserData(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);

      setCookie("access_token", user.access_token);
      setCookie("refresh_token", user.refresh_token);

      useAuthStore.setState({
        tokens: { accessToken: user.access_token },
      });
    },
    onError: (err) => console.log(err),
  });
};
