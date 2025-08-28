import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "@/helpers/axiosInstance";
import { useAuthStore } from "@/store/authState";

const setCookie = (name, value, maxAgeSeconds = 604800) => {
  document.cookie = `${name}=${value}; path=/; max-age=${maxAgeSeconds}; secure; samesite=strict`;
};

const registerUser = async (data) => {
  console.log("signup start");
  await axiosClient.post("/signup", data);
  console.log("signup success: ", data);

  const loginRes = await axiosClient.post("/auth/login", {
    email: data.email,
    password: data.password,
  });
  console.log("login success");

  return {
    access_token: loginRes.data.access_token,
    refresh_token: loginRes.data.refresh_token,
  };
};

export const useUserRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => registerUser(data),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);

      setCookie("access_token", user.access_token);
      setCookie("refresh_token", user.refresh_token);

      try {
        useAuthStore.setState({
          tokens: { accessToken: user.access_token },
        });
      } catch (e) {
        console.log("Ошибка setState", e);
      }
    },
    onError: (err) => console.log(err),
  });
};
