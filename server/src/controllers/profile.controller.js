import Profile from "../models/profile.js";
import Tweet from "../models/tweet.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

// SIGN UP
export const signUp = async (req, res) => {
  const { username, email } = req.body;
  const user = await Profile.findOne({
    $or: [{ email: email }, { username: username }],
  });
  if (user)
    return res
      .status(401)
      .json({ errors: [{ msg: "This user is already exist" }] });

  const profile = await Profile.create(req.body);
  const token = profile && generateToken(profile._id);
  return res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(profile);
};

// SIGN IN
export const signIn = async (req, res) => {
  const { username, password } = req.body;

  const profile = await Profile.findOne({
    $or: [{ username: username }, { email: username }],
  });
  const bcryptedPasword =
    profile && (await bcrypt.compare(password, profile.password));

  if (bcryptedPasword && profile) {
    const token = generateToken(profile._id);
    await profile.signIn();
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(profile);
  } else {
    res.status(401).json({ errors: [{ msg: "Invalid credentials" }] });
  }
};

export const signOut = async (req, res) => {
  const profile = req.user;
  await profile.signOut();
  return res
    .cookie("access_token", "", {
      httpOnly: true,
    })
    .status(200)
    .json({ msg: "Successfully signed out." });
};

// FOLLOW PROFILE
export const follow = async (req, res) => {
  const { username } = req.query;
  const user = req.user;

  const profile = await Profile.findOne({ username: username });
  await user.follow(profile);
  res.send(profile);
};

//UNFOLLOW PROFILE
export const unfollow = async (req, res) => {
  const { username } = req.query;
  const user = req.user;
  const profile = await Profile.findOne({ username: username });
  await user.unfollow(profile);
  return res.json(profile);
};

// GET PROFILE BY USERNAME OR ALL
export const getProfile = async (req, res) => {
  const { username } = req.query;
  if (username) {
    const profile = await Profile.findOne(
      { username: username },
      { password: 0 }
    );
    res.send(profile);
  } else {
    const profile = await Profile.find({}, { password: 0 });
    res.send(profile);
  }
};

export const getCurrentProfile = (req, res) => {
  const profile = req.user;
  res.send(profile);
};

// BOOKMARKS
export const addBookmark = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  const tweet = await Tweet.findOne({ _id: id });
  await profile.addBookmark(tweet);
  res.send(profile);
};

export const getBookmarks = async (req, res) => {
  const { user } = req;

  const bookmarks = await Tweet.find({
    _id: { $in: user.bookmarks },
    $or: [{ type: "tweet" }, { type: "retweet" }],
  }).sort("-createdAt");

  res.send(bookmarks);
};

export const removeBookmark = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  const tweet = await Tweet.findOne({ _id: id });
  await profile.removeBookmark(tweet);
  res.send(profile);
};

// EDIT PROFILE BIO
export const uploadAvatar = async (req, res) => {
  const { user, avatar } = req;
  await user.changeAvatar(avatar);
  res.send(user);
};

export const editProfile = async (req, res) => {
  const { user } = req;
  const body = req.body;
  await user.updateProfile(body);
  res.send(user);
};
