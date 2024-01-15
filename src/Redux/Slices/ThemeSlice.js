import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "Theme",
  initialState: {
    light: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.light = !state.light;
    },
  },
});
export const { toggleTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
