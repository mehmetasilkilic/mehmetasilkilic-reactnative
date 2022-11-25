import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface UtilsState {
  appearance: boolean;
  darkMode: boolean;
  search: boolean;
}

const initialState: UtilsState = {
  appearance: false,
  darkMode: false,
  search: false,
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
  },
});

export const { toggleAppearance, toggleDarkMode, toggleSearch } =
  utilsSlice.actions;

export const selectAppearance = (state: RootState) => state.utils.appearance;

export default utilsSlice.reducer;
