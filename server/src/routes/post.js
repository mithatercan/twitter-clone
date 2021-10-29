import express from "express";
import {
  getFollowingPosts,
  getPosts,
  newPost,
  deletePost,
  editPost,
  likePost,
  unlikePost,
  deleteComment,
  newComment,
} from "../controllers/post.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/following", auth, getFollowingPosts);
router.post("/new", auth, newPost);
router.patch("/delete", auth, deletePost);
router.patch("/edit", auth, editPost);
router.post("/like", auth, likePost);
router.patch("/unlike", auth, unlikePost);
router.post("/comment/new", auth, newComment);
router.patch("/comment/delete", auth, deleteComment);

export default router;
