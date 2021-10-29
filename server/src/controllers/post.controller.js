import Post from "../models/post.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
};

export const getFollowingPosts = async (req, res) => {
  const user = req.user;

  const posts = await Post.find({
    author: { $in: user.following },
  });
  res.send(posts);
};

// new post
export const newPost = async (req, res) => {
  const { title, body } = req.body;

  const user = req.user;

  const post = await new Post({
    title: title,
    body: body,
    author: user,
  });

  user.post(post);

  res.send(post);
};

export const deletePost = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  profile.deletePost(id);

  Post.deleteOne({ _id: id })
    .then(async (result) => {
      // Delete from profile object;
      res.send(result);
    })
    .catch((err) => res.status(err.code).json({ Errors: [{ msg: err }] }));
};

export const editPost = async (req, res) => {
  const { id } = req.query;
  const { title, body } = req.body;
  const post = await Post.findOneAndUpdate(
    { _id: id },
    {
      title: title,
      body: body,
    }
  );

  post.save();
  res.send(post);
};

export const likePost = (req, res) => {
  const { id } = req.query;
  const profile = req.user;
  Post.findOneAndUpdate({ _id: id }, { $push: { likes: profile } })
    .then((result) => res.send(result))
    .catch((err) => res.status(err.code).json({ Errors: [{ msg: err }] }));
};
export const unlikePost = async (req, res) => {
  const { id } = req.query;
  const profile = req.user;

  Post.findOneAndUpdate({ _id: id }, { $pull: { likes: profile._id } })
    .then((result) => res.send(result))
    .catch((err) => res.status(err.code).json({ Errors: [{ msg: err }] }));
};
export const newComment = (req, res) => {
  const { id } = req.query;
  const body = req.body;
  const profile = req.user;

  Post.findOneAndUpdate(
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
  const { postId, commentId } = req.query;

  const post = await Post.find({ _id: postId });
  // Post.findOneAndUpdate(
  //   { _id: postId },
  //   { $pull: { "comments._id": new mongoose.Types.ObjectId(commentId) } }
  // )
  //   .then((result) => res.send(result))
  //   .catch((err) => res.send(err));
  res.send(post);
};
