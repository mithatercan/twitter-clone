import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";

const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    title: String,
    body: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      autopopulate: { select: "username", maxDepth: 1 },
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
  { collection: "posts" }
);

postSchema.plugin(autopopulate);

const Post = model("Post", postSchema);

export default Post;
