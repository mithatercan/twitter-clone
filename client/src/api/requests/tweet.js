import * as url from "../urls";
import axios from "axios";
axios.defaults.withCredentials = true;

export const newTweet = (data) => {
  return axios
    .post(url.NEW_TWEET, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const editTweet = (data, tweetId) => {
  return axios
    .patch(url.EDIT_TWEET + tweetId, data)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const deleteTweet = (tweetId) => {
  return axios
    .delete(url.DELETE_TWEET + tweetId)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const likeTweet = (tweetId) => {
  return axios
    .post(url.LIKE_TWEET + tweetId)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const unlikeTweet = (tweetId) => {
  return axios
    .patch(url.UNLIKE_TWEET + tweetId)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const newReply = (data, tweetId) => {
  return axios
    .post(url.NEW_REPLY + tweetId, {
      body: data,
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getAllTweets = async (page) => {
  return await axios
    .get(url.GET_ALL_TWEETS + page)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getFollowingTweets = (page) => {
  return axios
    .get(url.GET_FOLLOWING_TWEETS + page)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const getTweetById = (tweetId) => {
  return axios
    .get(url.GET_TWEET_ID + tweetId)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const getProfileTweets = (username) => {
  return axios
    .get(url.GET_PROFILE_TWEETS + username)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const retweet = (tweetId) => {
  return axios
    .post(url.RETWEET + tweetId)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
