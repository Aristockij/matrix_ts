import { create } from "zustand";

export const useStore = create((set) => ({
  index: 0,
  setIndex: (newIndex) => set((state) => ({ index: newIndex })),
}));
