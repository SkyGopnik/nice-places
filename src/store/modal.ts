import { create } from "zustand";

import { Modal } from "src/types/modal";

interface StoreState {
  activeModal: Modal | null,
  snap: number | null,
  setSnap(snap: number): void,
  openModal(modal: Modal): void,
  closeModal(): void
}

export const modalStore = create<StoreState>((set) => ({
  activeModal: null,
  snap: null,
  setSnap: (snap) => {
    return set({
      snap
    });
  },
  openModal: (modal) => {
    return set({
      activeModal: modal
    });
  },
  closeModal: () => {
    return set({
      activeModal: null,
      snap: null
    });
  }
}));
