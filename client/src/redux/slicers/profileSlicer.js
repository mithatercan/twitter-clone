import { createSlice } from "@reduxjs/toolkit";

export const profileSlicer = createSlice({
  name: "profile",
  initialState: {
    data: null,
    reRender: false,
    errors: [],
  },
  reducers: {
    signin: (state, action) => {
      state.data = action.payload;
    },
    signout: (state) => {
      state.data = null;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setReRender: (state, action) => {
      state.reRender = action.payload;
    },
  },
});

export const { signin, signout, setErrors, setReRender } =
  profileSlicer.actions;

export default profileSlicer.reducer;
