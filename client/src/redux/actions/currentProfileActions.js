import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authApi from "../../api/requests/auth";
import * as profileApi from "../../api/requests/profile";

export const signIn = createAsyncThunk(
  "currentProfile/signIn",
  async (formData) => {
    try {
      const response = await authApi.signin(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const signUp = createAsyncThunk(
  "currentProfile/signUp",
  async (formData) => {
    try {
      const response = await authApi.signup(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const signOut = createAsyncThunk("currentProfile/signOut", async () => {
  try {
    const response = await authApi.signout();
    return response;
  } catch (error) {
    return error;
  }
});

export const getCurrentProfile = createAsyncThunk(
  "currentProfile/getCurrentProfile",
  async () => {
    try {
      const response = await profileApi.getCurrentProfile();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const addBookmark = createAsyncThunk(
  "currentProfile/addBookmark",
  async (tweetId) => {
    try {
      const response = await profileApi.addBookmark(tweetId);
      return response;
    } catch (error) {
      return error;
    }
  }
);
export const removeBookmark = createAsyncThunk(
  "currentProfile/removeBookmark",
  async (tweetId) => {
    try {
      const response = await profileApi.removeBookmark(tweetId);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const editProfile = createAsyncThunk(
  "currentProfile/editProfile",
  async (formData) => {
    try {
      const response = await profileApi.updateProfile(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const uploadAvatar = createAsyncThunk(
  "currentProfile/uploadAvatar",
  async (formData) => {
    try {
      const response = await profileApi.uploadAvatar(formData);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getBookmarks = createAsyncThunk(
  "currentProfile/getBookmarks",
  async () => {
    try {
      const response = await profileApi.getBookmarks();
      return response;
    } catch (error) {
      return error;
    }
  }
);
