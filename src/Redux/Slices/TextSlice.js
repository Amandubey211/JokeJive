import { createSlice } from "@reduxjs/toolkit";

const TextSlice = createSlice({
  name: "Text",
  initialState: {
    CopiedText: "",
  },
  reducers: {
    AddCopiedText: (state, action) => {
      state.copyBtn = action.payload;
    },
  },
});

export const { AddCopiedText } = TextSlice.actions;
export default TextSlice.reducer;
