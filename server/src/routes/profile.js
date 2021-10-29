import express from "express";
import { body } from "express-validator";
import {
  getProfile,
  signUp,
  signIn,
  follow,
  unfollow,
  removeFollow,
} from "../controllers/profile.controller.js";

import auth from "../middlewares/auth.js";
import {
  validateRequest,
  validateSchema,
} from "../middlewares/validate-request.js";

const router = express.Router();

router.get("/", getProfile);

router.post("/sign-up", validateSchema, validateRequest, signUp);
router.post("/sign-in", signIn);

router.post("/follow", auth, follow);
router.patch("/unfollow", auth, unfollow);
router.patch("/remove-follow", auth, removeFollow);

export default router;
