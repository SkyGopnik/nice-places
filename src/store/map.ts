import { create } from "zustand";

interface StoreState {
  state: {
    center: Array<number>,
    zoom: number
  },
  setState(state: StoreState["state"]): void
}

export const mapStore = create<StoreState>((set) => ({
  state: {
    center: [55.751444, 37.618897],
    zoom: 12
  },
  setState: (state) => {
    return set({
      state
    });
  }
}));
