import { create } from "zustand";

import { ListKeys, listKeys, LocationItem } from "src/data/list";

interface StoreState {
  activeCategories: Array<ListKeys>,
  activeItem: LocationItem | null,
  setActiveCategories(categories: Array<ListKeys>): void,
  setActiveItem(item: LocationItem | null): void
}

export const filterStore = create<StoreState>((set) => ({
  activeCategories: listKeys,
  activeItem: null,
  setActiveCategories: (categories) => {
    return set({
      activeCategories: categories
    });
  },
  setActiveItem: (item) => {
    return set({
      activeItem: item
    });
  }
}));
