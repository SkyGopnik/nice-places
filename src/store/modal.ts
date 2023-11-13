import { create } from "zustand";

import { Modal } from "src/types/modal";

interface StoreState {
  activeModal: Modal | null,
  height: number | null,
  snap: number | null,
  setHeight(height: number | null): void,
  setSnap(snap: number | null): void,
  openModal(modal: Modal): void,
  closeModal(): void
}

export const modalStore = create<StoreState>((set) => ({
  activeModal: null,
  height: null,
  snap: null,
  setHeight: (height) => {
    return set({
      height
    });
  },
  setSnap: (snap) => {
    return set({
      snap
    });
  },
  openModal: (modal) => {
    return set({
      activeModal: modal,
      snap: null
    });
  },
  closeModal: () => {
    return set({
      activeModal: null,
      snap: null
    });
  }
}));
