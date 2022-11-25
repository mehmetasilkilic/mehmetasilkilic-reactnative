import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface UtilsState {
  appearance: boolean;
}

// Define the initial state using that type
const initialState: UtilsState = {
  appearance: false,
};

export const utilsSlice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    toggleAppearance(state) {
      const appearance = !state.appearance;
      return { ...state, appearance };
    },
  },
});

export const { toggleAppearance } = utilsSlice.actions;

export const selectAppearance = (state: RootState) => state.utils.appearance;

export default utilsSlice.reducer;
