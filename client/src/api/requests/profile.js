import axios from "axios";
import * as url from "../urls";

axios.defaults.withCredentials = true;

export const getAllProfiles = () => {
  return axios
    .get(url.GET_ALL_PROFILES)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getCurrentProfile = () => {
  return axios
    .get(url.GET_CURRENT_PROFILE)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getProfileByUsername = (username) => {
  return axios
    .get(url.GET_PROFILE_USERNAME + username)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const followByUsername = (username) => {
  return axios
    .post(url.FOLLOW_NAME + username)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const unFollowUsername = (username) => {
  return axios
    .patch(url.UNFOLLOW_NAME + username)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const uploadAvatar = (avatar) => {
  console.log(avatar);
  return axios
    .post(url.UPLOAD_AVATAR, avatar)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const updateProfile = (formData) => {
  return axios
    .post(url.UPDATE_PROFILE, formData)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const getBookmarks = () => {
  return axios
    .get(url.GET_BOOKMARK)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};

export const addBookmark = (id) => {
  return axios
    .post(url.ADD_BOOKMARK + id)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
export const removeBookmark = (id) => {
  return axios
    .patch(url.REMOVE_BOOKMARK + id)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.response;
    });
};
