const URL = "http://localhost:5000";

// PROFILE ENDPOINTS //
// ------------------//

//PROFILE AUTHENTICATION
export const SIGN_UP = `${URL}/profile/sign-up`;
export const SIGN_OUT = `${URL}/profile/sign-out`;
export const SIGN_IN = `${URL}/profile/sign-in`;
//EDIT PROFILE
export const UPDATE_PROFILE = `${URL}/profile/edit`;
export const UPLOAD_AVATAR = `${URL}/profile/upload-avatar`;
// FOLLOW/UNFOLLOW
export const FOLLOW_ID = `${URL}/profile/follow?id=`;
export const FOLLOW_NAME = `${URL}/profile/follow?username=`;
export const UNFOLLOW_ID = `${URL}/profile/unfollow?id=`;
export const UNFOLLOW_NAME = `${URL}/profile/unfollow?username=`;
// GET PROFILES
export const GET_CURRENT_PROFILE = `${URL}/profile/current`;
export const GET_ALL_PROFILES = `${URL}/profile?page=`;
export const GET_PROFILE_USERNAME = `${URL}/profile?username=`;
export const GET_PROFILE_ID = `${URL}/profile?id=`;

//PROFILE BOOKMARK
export const ADD_BOOKMARK = `${URL}/profile/bookmark/add?id=`;
export const REMOVE_BOOKMARK = `${URL}/profile/bookmark/remove?id=`;
export const GET_BOOKMARK = `${URL}/profile/bookmarks`;

//  TWEET ENDPOINTS  //
// ------------------//
export const NEW_TWEET = `${URL}/tweet/new`;
export const RETWEET = `${URL}/tweet/retweet?id=`;

// TWEET EDIT
export const EDIT_TWEET = `${URL}/tweet/edit?id=`;
export const DELETE_TWEET = `${URL}/tweet/delete?id=`;

//TWEET LIKE
export const LIKE_TWEET = `${URL}/tweet/like?id=`;
export const UNLIKE_TWEET = `${URL}/tweet/unlike?id=`;

// TWEET COMMENT
export const NEW_REPLY = `${URL}/tweet/reply/new?id=`;
export const DELETE_COMMENT = `${URL}/tweet/reply/delete?id=`;

// GET TWEETS
export const GET_ALL_TWEETS = `${URL}/tweet?page=`;
export const GET_PROFILE_TWEETS = `${URL}/tweet/profile?username=`;
export const GET_TWEET_ID = `${URL}/tweet?id=`;
export const GET_FOLLOWING_TWEETS = `${URL}/tweet/following?page=`;
