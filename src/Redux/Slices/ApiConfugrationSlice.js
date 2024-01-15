import { createSlice } from "@reduxjs/toolkit";

const ApiSlice = createSlice({
  name: "ApiConfugration",
  initialState: {
    category: "Any",
    jokeType: "single",
    language: "en",
  },
  reducers: {
    SetCategory: (state, action) => {
      state.category = action.payload;
    },
    SetJokeType: (state, action) => {
      state.jokeType = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage, SetCategory, SetJokeType } = ApiSlice.actions;
export default ApiSlice.reducer;
