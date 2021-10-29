import axios from "axios";
import * as url from "../urls";

export const getAllProfiles = (token) => {
  axios({
    method: "GET",
    url: url.GET_ALL_PROFILES,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const getProfileById = (token, profileId) => {
  axios({
    method: "GET",
    url: url.GET_PROFILE_ID + profileId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const getProfileByUsername = (token, username) => {
  axios({
    method: "GET",
    url: url.GET_PROFILE_ID + username,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const followById = (token, userId) => {
  axios({
    method: "POST",
    url: url.FOLLOW_ID + userId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const followByUsername = (token, username) => {
  axios({
    method: "POST",
    url: url.FOLLOW_NAME + username,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const unFollowId = (token, userId) => {
  axios({
    method: "POST",
    url: url.UNFOLLOW_ID + userId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const unFollowUsername = (token, username) => {
  axios({
    method: "PATCH",
    url: url.UNFOLLOW_NAME + username,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const removeFollowerId = (token, userId) => {
  axios({
    method: "PATCH",
    url: url.REMOVE_ID + userId,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};

export const removeFollowerName = (token, username) => {
  axios({
    method: "PATCH",
    url: url.REMOVE_NAME + username,
    headers: {
      token: token,
    },
  })
    .then((result) => result.data)
    .catch((err) => err.reponse.data.errors);
};
