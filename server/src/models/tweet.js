import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const { Schema, model } = mongoose;

const tweetSchema = new Schema(
  {
    body: {
      type: String,
    },
    type: {
      type: String,
      enum: ["tweet", "reply", "retweet"],
      required: true,
    },
    originalTweet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tweet",
      autopopulate: true,
    },
    retweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      autopopulate: { select: "username fname lname avatar", maxDepth: 2 },
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        autopopulate: { select: "username", maxDepth: 1 },
      },
    ],
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        autopopulate: { maxDepth: 1 },
      },
    ],
  },
  { timestamps: true },
  { collection: "tweets" }
);

tweetSchema.plugin(autopopulate);

const Tweet = model("Tweet", tweetSchema);
export default Tweet;
