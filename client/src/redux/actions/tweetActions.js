import { createAsyncThunk } from "@reduxjs/toolkit";
import * as tweetApi from "../../api/requests/tweet";

export const getAllTweets = createAsyncThunk(
  "tweet/getAllTweets",
  async (page) => {
    try {
      const response = await tweetApi.getAllTweets(page);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getFollowingTweets = createAsyncThunk(
  "tweet/getFollowingTweets",
  async (page) => {
    try {
      const response = await tweetApi.getFollowingTweets(page);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getTweetById = createAsyncThunk(
  "tweet/getTweetById",
  async (tweetId) => {
    try {
      const response = await tweetApi.getTweetById(tweetId);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const likeTweet = createAsyncThunk(
  "tweet/likeTweet",
  async (tweetId) => {
    try {
      const response = await tweetApi.likeTweet(tweetId);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const unlikeTweet = createAsyncThunk(
  "tweet/unlikeTweet",
  async (tweetId) => {
    try {
      const response = await tweetApi.unlikeTweet(tweetId);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const newTweet = createAsyncThunk("tweet/newTweet", async (formData) => {
  try {
    const response = await tweetApi.newTweet(formData);
    return response;
  } catch (error) {
    return error;
  }
});

export const newReply = createAsyncThunk(
  "tweet/newReply",
  async ({ data, id }) => {
    try {
      const response = await tweetApi.newReply(data, id);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const newRetweet = createAsyncThunk("tweet/newRetweet", async (id) => {
  try {
    const response = await tweetApi.retweet(id);
    return response;
  } catch (error) {
    return error;
  }
});

export const editTweet = createAsyncThunk(
  "tweet/editTweet",
  async ({ data, id }) => {
    try {
      const response = await tweetApi.editTweet(data, id);
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const deleteTweet = createAsyncThunk("tweet/deleteTweet", async (id) => {
  try {
    const response = await tweetApi.deleteTweet(id);
    return response;
  } catch (error) {
    return error;
  }
});
