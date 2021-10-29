import * as url from "../urls";
import axios from "axios";

export const newPost = (data, token) => {
  axios({
    method: "POST",
    url: url.NEW_POST,
    headers: {
      token: token,
    },
    data: data,
  })
    .then((result) => result.data)
    .catch((err) => err.response.data.errors);
};

export const editPost = (data, postId, token) => {
  axios({
    method: "PATCH",
    url: url.NEW_POST + postId,
    headers: {
      token: token,
    },
    data: data,
  })
    .then((result) => result.data)
    .catch((err) => err.response.data.errors);
};

export const deletePost = (data, postId, token) => {
  axios({
    method: "PATCH",
    url: url.NEW_POST + postId,
    headers: {
      token: token,
    },
    data: data,
  })
    .then((result) => result.data)
    .catch((err) => err.response.data.errors);
};

export const likePost = (postId, token) => {
  axios({
    method: "PATCH",
    url: url.NEW_POST + postId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};
export const unlikePost = (postId, token) => {
  axios({
    method: "PATCH",
    url: url.NEW_POST + postId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const getFollowingPosts = (token) => {
  axios({
    method: "GET",
    url: url.GET_FOLLOWING_POSTS,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const getAllPosts = (token) => {
  axios({
    method: "GET",
    url: url.GET_ALL_POSTS,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};
export const getPostById = (token, postId) => {
  axios({
    method: "GET",
    url: url.GET_POST_ID + postId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};
