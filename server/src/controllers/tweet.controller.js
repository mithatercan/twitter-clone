import Tweet from "../models/tweet.js";
import mongoose from "mongoose";

export const getTweets = async (req, res) => {
  res.send(await Tweet.find().sort("-createdAt"));
};

export const getFollowingTweets = async (req, res) => {
  const user = req.user;
  res.send(await Tweet.find({ author: { $in: user.following } }));
};

export const newTweet = async (req, res) => {
  const { body } = req.body;
  const user = req.user;

  try {
    const tweet = await Tweet.create({
      body: body,
      author: user,
    });
    user.tweet(tweet);
    res.send(tweet);
  } catch (error) {
    res.next(error);
  }
};

export const deleteTweet = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  profile.deleteTweet(id);

  Tweet.deleteOne({ _id: id })
    .then(async (result) => {
      res.send(result);
    })
    .catch((err) => res.status(err.code).json({ Errors: [{ msg: err }] }));
};

export const editTweet = async (req, res) => {
  const { id } = req.query;
  const { body } = req.body;
  const user = req.user;
  const tweet = await Tweet.findOne({ _id: id });
  user.editTweet(tweet, body);
  res.send(tweet);
};

export const likeTweet = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  const tweet = await Tweet.findOne({ _id: id });
  profile.like(tweet);
  res.send(tweet);
};
export const unlikeTweet = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  const tweet = await Tweet.findOne({ _id: id });
  profile.unlike(tweet);
  res.send(tweet);
};

export const newComment = (req, res) => {
  const { id } = req.query;
  const body = req.body;
  const profile = req.user;

  Tweet.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        comments: {
          _id: new mongoose.Types.ObjectId(),
          userid: profile._id,
          username: profile.username,
          comment: body.comment,
        },
      },
    }
  )
    .then((result) => res.send(result))
    .catch((err) => res.status(err.code).json({ Errors: [{ msg: err }] }));
};

export const deleteComment = async (req, res) => {
  const { tweetId, commentId } = req.query;

  const tweet = await Tweet.find({ _id: tweetId });

  res.send(tweet);
};
