import { createSlice } from "@reduxjs/toolkit";

const TextSlice = createSlice({
  name: "Text",
  initialState: {
    CopiedText: "",
  },
  reducers: {
    AddCopiedText: (state, action) => {
      state.CopiedText = action.payload;
    },
  },
});

export const { AddCopiedText } = TextSlice.actions;
export default TextSlice.reducer;
