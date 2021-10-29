import express from "express";
import {
  getProfile,
  signUp,
  signIn,
  follow,
  unfollow,
  removeFollow,
} from "../controllers/profile.controller.js";

import auth from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", getProfile);

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);

router.post("/follow", auth, follow);
router.patch("/unfollow", auth, unfollow);
router.patch("/remove-follow", auth, removeFollow);

export default router;
