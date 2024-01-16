import { createSlice } from "@reduxjs/toolkit";

const JokeSlice = createSlice({
  name: "jokes",
  initialState: {
    jokes: [],
    loading: false,
  },
  reducers: {
    SetJokes: (state, action) => {
      state.jokes = action.payload;
    },
    SetMoreJokes: (state, action) => {
      state.jokes.push(...action.payload);
    },
    SetLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { SetJokes, SetMoreJokes, SetLoading } = JokeSlice.actions;
export default JokeSlice.reducer;
