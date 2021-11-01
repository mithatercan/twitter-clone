import express from "express";
import {
  getTweets,
  getFollowingTweets,
  newTweet,
  deleteTweet,
  editTweet,
  likeTweet,
  unlikeTweet,
  newComment,
  deleteComment,
} from "../controllers/tweet.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getTweets);
router.get("/following", auth, getFollowingTweets);
router.post("/new", auth, newTweet);
router.patch("/delete", auth, deleteTweet);
router.patch("/edit", auth, editTweet);
router.post("/like", auth, likeTweet);
router.patch("/unlike", auth, unlikeTweet);
router.post("/comment/new", auth, newComment);
router.patch("/comment/delete", auth, deleteComment);

export default router;
