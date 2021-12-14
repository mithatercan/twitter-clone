import { createSlice } from "@reduxjs/toolkit";
import * as action from "../actions/currentProfileActions";

export const currentProfileSlicer = createSlice({
  name: "currentProfile",
  initialState: {
    data: null,
    bookmarks: null,
    loading: false,
    errors: null,
  },
  extraReducers: {
    [action.signUp.pending]: (state) => {
      state.loading = true;
    },
    [action.signIn.pending]: (state) => {
      state.loading = true;
    },
    [action.getCurrentProfile.pending]: (state) => {
      state.loading = true;
    },
    [action.signUp.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      } else {
        state.errors = data.errors;
      }
      state.loading = false;
    },
    [action.signIn.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      } else {
        state.errors = data.errors;
      }
      state.loading = false;
    },
    [action.signOut.fulfilled]: (state, action) => {
      const { status } = action.payload;
      if (status === 200) {
        state.data = null;
      }
    },
    [action.getCurrentProfile.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      }
      state.loading = false;
    },
    [action.addBookmark.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      }
    },
    [action.removeBookmark.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      }
    },
    [action.editProfile.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      }
    },
    [action.uploadAvatar.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.data = data;
      }
    },
    [action.getBookmarks.fulfilled]: (state, action) => {
      const { status, data } = action.payload;
      if (status === 200) {
        state.bookmarks = data;
      }
    },
  },
});

export default currentProfileSlicer.reducer;
