import * as url from "../urls";
import axios from "axios";

export const newTweet = (data, token) => {
  return axios({
    method: "POST",
    url: url.NEW_TWEET,
    headers: {
      token: token,
    },
    data: data,
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};

export const editTweet = (data, tweetId, token) => {
  return axios({
    method: "PATCH",
    url: url.EDIT_TWEET + tweetId,
    headers: {
      token: token,
    },
    data: data,
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};

export const deleteTweet = (tweetId, token) => {
  return axios({
    method: "PATCH",
    url: url.DELETE_TWEET + tweetId,
    headers: {
      token: token,
    },
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};

export const likeTweet = (tweetId, token) => {
  return axios({
    method: "PATCH",
    url: url.LIKE_TWEET + tweetId,
    headers: {
      token: token,
    },
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};
export const unlikeTwett = (tweetId, token) => {
  return axios({
    method: "PATCH",
    url: url.UNLIKE_TWEET + tweetId,
    headers: {
      token: token,
    },
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};

export const getAllTweets = async (token) => {
  return await axios({
    method: "GET",
    url: url.GET_ALL_TWEETS,
    headers: {
      token: token,
    },
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};
export const getFollowingTweets = (token) => {
  return axios({
    method: "GET",
    url: url.GET_FOLLOWING_TWEETS,
    headers: {
      token: token,
    },
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};
export const getTweetById = (token, tweetId) => {
  return axios({
    method: "GET",
    url: url.GET_TWEET_ID + tweetId,
    headers: {
      token: token,
    },
  })
    .then((result) => {
      return { type: "success", data: result.data };
    })
    .catch((err) => {
      return { type: "error", data: err.response.data.errors };
    });
};
