import { create } from "zustand";

import { ListKeys, listKeys } from "src/data/list";

interface StoreState {
  activeCategories: Array<ListKeys>,
  setActiveCategories(categories: Array<ListKeys>): void
}

export const filterStore = create<StoreState>((set) => ({
  activeCategories: listKeys,
  setActiveCategories: (categories) => {
    return set({
      activeCategories: categories
    });
  }
}));
