import { createSlice } from "@reduxjs/toolkit";

const JokeSlice = createSlice({
  name: "jokes",
  initialState: {
    jokes: [],
  },
  reducers: {
    SetJokes: (state, action) => {
      state.jokes = action.payload;
    },
    SetMoreJokes: (state, action) => {
      state.jokes.push(...action.payload);
    },
  },
});
export const { SetJokes,SetMoreJokes } = JokeSlice.actions;
export default JokeSlice.reducer;
