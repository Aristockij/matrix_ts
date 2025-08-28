import { create } from "zustand";

export const useAuthStore = create((set) => ({
  tokens: null,
  setTokens: (tokens) => {
    set({ tokens });
  },
  restoreSession: () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const storedAccessToken = getCookie("access_token");

    if (storedAccessToken) {
      set({ tokens: { accessToken: storedAccessToken } });
    }
  },
}));
export default useAuthStore;
