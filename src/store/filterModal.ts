import { create } from "zustand";

interface FilterModalStoreState {
  opened: boolean,
  snap: number | null,
  position: number | null,
  setPosition(position: number | null): void,
  setSnap(snap: number): void,
  openModal(): void,
  closeModal(): void
}

export const filterModalStore = create<FilterModalStoreState>((set) => ({
  opened: false,
  snap: null,
  position: null,
  setPosition: (position) => {
    return set({
      position
    });
  },
  setSnap: (snap) => {
    return set({
      snap
    });
  },
  openModal: () => {
    return set({
      opened: true
    });
  },
  closeModal: () => {
    return set({
      opened: false,
      snap: null
    });
  }
}));
