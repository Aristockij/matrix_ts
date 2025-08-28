import { create } from "zustand";

export const useStore = create((set) => ({
  profile: { name: "", password: "" },
  signInState: (name, pass) =>
    set((state) => ({ profile: { name: name, password: pass } })),
}));
