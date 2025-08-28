import axios from "axios";
import useAuthStore from "@/store/authState";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BASEURL;
axiosClient.defaults.headers.common["Content-Type"] = "application/json";
axiosClient.defaults.headers.common["Accept"] = "application/json";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

axiosClient.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().tokens?.accessToken;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.response?.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;

      const refreshToken = getCookie("refresh_token");

      if (!refreshToken) {
        logoutUser();
        return Promise.reject("No refresh token");
      }

      try {
        const { data } = await axiosClient.post(`/auth/refresh-token`, {
          refresh_token: refreshToken,
        });

        const newAccess = data.access_token;
        const newRefresh = data.refresh_token;

        document.cookie = `access_token=${newAccess}; path=/; max-age=604800; secure; samesite=strict`;
        document.cookie = `refresh_token=${newRefresh}; path=/; max-age=604800; secure; samesite=strict`;

        originalConfig.headers["Authorization"] = `Bearer ${newAccess}`;
        return axiosClient(originalConfig);
      } catch (_error) {
        logoutUser();
        return Promise.reject(_error);
      }
    }

    return Promise.reject(err);
  }
);

export const logoutUser = () => {
  useAuthStore.setState({ tokens: null });
  document.cookie = "access_token=; path=/; max-age=0";
  document.cookie = "refresh_token=; path=/; max-age=0";
  window.location.href = "/";
};

export default axiosClient;
