import { createSlice } from "@reduxjs/toolkit";
import { DARK, LIGHT } from "../../constants/themes";

const initialState = {
  theme: LIGHT,
  darkMode: false,
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.darkMode = !state.darkMode;
      state.theme = state.darkMode ? DARK : LIGHT;
    },
  },
});

export default ThemeSlice.reducer;
export const { toggleTheme } = ThemeSlice.actions;
