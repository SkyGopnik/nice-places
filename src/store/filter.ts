import { create } from "zustand";

import { list, listKeys } from "src/data/list";

interface FilterStoreState {
  activeCategories: Array<keyof typeof list>,
  setActiveCategories(categories: FilterStoreState["activeCategories"]): void
}

export const filterStore = create<FilterStoreState>((set) => ({
  activeCategories: listKeys,
  setActiveCategories: (categories) => {
    return set({
      activeCategories: categories
    });
  }
}));
