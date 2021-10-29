import { createSlice } from "@reduxjs/toolkit";

export const profileSlicer = createSlice({
  name: "profile",
  state: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = profileSlicer.actions;

export default profileSlicer.reducer;
