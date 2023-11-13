import { create } from "zustand";

interface StoreState {
  position: number | null,
  setPosition(position: number | null): void
}

export const floatButtonsStore = create<StoreState>((set) => ({
  position: null,
  setPosition: (position) => {
    return set({
      position
    });
  }
}));
