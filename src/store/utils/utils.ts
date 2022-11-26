import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CategoryProps } from "../../features/home/components/categoryList.component";

interface UtilsState {
  appearance: boolean;
  darkMode: boolean;
  search: boolean;
  selected: CategoryProps;
}

const All = {
  _id: "all",
  name: "All",
  createdAt: "1",
  updatedAt: "1",
  __v: 0,
};

const initialState: UtilsState = {
  appearance: false,
  darkMode: false,
  search: false,
  selected: All,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    toggleAppearance(state) {
      const appearance = !state.appearance;
      return { ...state, appearance };
    },
    toggleDarkMode(state) {
      const darkMode = !state.darkMode;
      return { ...state, darkMode };
    },
    toggleSearch(state) {
      const search = !state.search;
      return { ...state, search };
    },
    selectCategory(state, action: PayloadAction<CategoryProps>) {
      const selected = action.payload;
      return { ...state, selected };
    },
  },
});

export const {
  toggleAppearance,
  toggleDarkMode,
  toggleSearch,
  selectCategory,
} = utilsSlice.actions;

export const selectAppearance = (state: RootState) => state.utils.appearance;

export default utilsSlice.reducer;
