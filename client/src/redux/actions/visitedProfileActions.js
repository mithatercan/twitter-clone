import { createAsyncThunk } from "@reduxjs/toolkit";
import * as profileApi from "../../api/requests/profile";
import * as tweetApi from "../../api/requests/tweet";
export const getVisitedProfile = createAsyncThunk(
  "visitedProfile/getVisitedProfile",
  async (username) => {
    try {
      const response = await profileApi.getProfileByUsername(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const followVisitedProfile = createAsyncThunk(
  "visitedProfile/getVisitedProfile",
  async (username) => {
    try {
      const response = await profileApi.followByUsername(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const unFollowVisitedProfile = createAsyncThunk(
  "visitedProfile/getVisitedProfile",
  async (username) => {
    try {
      const response = await profileApi.unFollowUsername(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getProfileTweets = createAsyncThunk(
  "currentProfile/getProfileTweets",
  async (username) => {
    try {
      const response = await tweetApi.getProfileTweets(username);
      return response;
    } catch (error) {
      return error;
    }
  }
);
