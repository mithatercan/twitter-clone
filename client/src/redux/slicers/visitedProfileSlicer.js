import { createSlice } from "@reduxjs/toolkit";
import * as action from "../actions/visitedProfileActions";
export const visitedProfileSlicer = createSlice({
  name: "visitedProfile",
  initialState: {
    data: null,
    tweets: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [action.getVisitedProfile.pending]: (state) => {
      state.loading = true;
    },

    [action.getVisitedProfile.fulfilled]: (state, action) => {
      const { data, status } = action.payload;
      if (status === 200) {
        state.loading = false;
        state.data = data;
      } else {
        state.loading = false;
        state.error = data;
      }
    },
    [action.followVisitedProfile.fulfilled]: (state, action) => {
      const { data, status } = action.payload;
      if (status === 200) {
        state.data = data;
      } else {
        state.error = data;
      }
    },
    [action.unFollowVisitedProfile.fulfilled]: (state, action) => {
      const { data, status } = action.payload;
      if (status === 200) {
        state.data = data;
      } else {
        state.error = data;
      }
    },
    [action.getProfileTweets.fulfilled]: (state, action) => {
      const { data, status } = action.payload;
      if (status === 200) {
        state.tweets = data;
      } else {
        state.error = data;
      }
    },
  },
});

export default visitedProfileSlicer.reducer;
