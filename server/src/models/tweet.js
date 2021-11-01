import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const { Schema, model } = mongoose;

const tweetSchema = new Schema(
  {
    body: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      autopopulate: { select: "username fname lname", maxDepth: 1 },
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        autopopulate: { select: "username", maxDepth: 1 },
      },
    ],
    comments: [],
  },
  { timestamps: true },
  { collection: "tweets" }
);

tweetSchema.plugin(autopopulate);

const Tweet = model("Tweet", tweetSchema);

export default Tweet;
