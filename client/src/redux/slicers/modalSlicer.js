import { createSlice } from "@reduxjs/toolkit";

const modalSlicer = createSlice({
  name: "modal",
  initialState: {
    sidebarModal: false,
    tweetEditorModal: false,
  },
  reducers: {
    toggleSidebarModal: (state) => {
      state.sidebarModal = !state.sidebarModal;
    },

    toggleTweetEditorModal: (state, action) => {
      if (state.tweetEditorModal) {
        state.tweetEditorModal = false;
      } else {
        state.tweetEditorModal = action.payload;
      }
    },
  },
});

export const {
  toggleSidebarModal,
  toggleTweetEditorModal,
  toggleRetweetModal,
} = modalSlicer.actions;
export default modalSlicer.reducer;
