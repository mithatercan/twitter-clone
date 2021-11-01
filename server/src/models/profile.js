import mongoose from "mongoose";
import mongooseId from "../utils/mongooseId.js";
import getNow from "../utils/getNow.js";
import autopopulate from "mongoose-autopopulate";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String,
    bio: String,
    avatar: String,
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        autopopulate: {
          select: "_id title body likes comments createdAt",
          maxDepth: 1,
        },
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        autopopulate: { select: "username _id", maxDepth: 1 },
      },
    ],
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        autopopulate: { select: "username _id", maxDepth: 1 },
      },
    ],
    notifications: Array,
  },
  { timestamps: true },
  { collection: "profiles" }
);

// For schema methods.
class ProfileClass {
  tweet(tweet) {
    this.tweets.push(tweet);
    return this.save();
  }
  like(tweet) {
    tweet.likes.push(this);
    return tweet.save();
  }
  unlike(tweet) {
    tweet.likes = tweet.likes.filter(
      (like) => mongooseId(like._id) === mongooseId(this._id)
    );
    return tweet.save();
  }
  deleteTweet(id) {
    this.tweets = this.tweets.filter(
      (tweets) => mongooseId(tweets._id) !== mongooseId(id)
    );
    return this.save();
  }
  editTweet(tweet, body) {
    tweet.body = body;
    return tweet.save();
  }

  async follow(profile) {
    const now = getNow();
    profile.followers.push(this);
    profile.notifications.push(
      `${this.username} has started following you at ${now}.`
    );
    this.following.push(profile);

    await this.save();
    await profile.save();
  }

  async unfollow(profile) {
    const now = getNow();

    profile.followers = profile.followers.filter(
      (follow) => follow.username !== this.username
    );
    profile.notifications.push(
      `${this.username} has stopped following you at ${now}.`
    );
    this.following = this.following.filter(
      (follow) => follow.username !== profile.username
    );

    await this.save();
    await profile.save();
  }
}

// Generates hash password on save.

profileSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

profileSchema.plugin(autopopulate);
profileSchema.loadClass(ProfileClass);

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
