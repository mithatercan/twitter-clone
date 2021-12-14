import express from "express";
import {
  retweet,
  getTweet,
  getFollowingTweets,
  getProfileTweets,
  newTweet,
  deleteTweet,
  editTweet,
  likeTweet,
  unlikeTweet,
  newReply,
  deleteReply,
} from "../controllers/tweet.controller.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", getTweet);
router.get("/following", auth, getFollowingTweets);
router.get("/profile", auth, getProfileTweets);

router.post("/new", auth, newTweet);
router.post("/retweet", auth, retweet);

router.post("/reply/new", auth, newReply);
router.delete("/delete", auth, deleteTweet);

router.delete("/comment/delete", auth, deleteReply);
router.patch("/edit", auth, editTweet);

router.post("/like", auth, likeTweet);
router.patch("/unlike", auth, unlikeTweet);

export default router;
