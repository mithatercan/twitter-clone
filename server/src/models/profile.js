import mongoose from "mongoose";
import Tweet from "./tweet.js";
import getDate from "../utils/getDate.js";
import autopopulate from "mongoose-autopopulate";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    isOnline: Boolean,
    fname: String,
    lname: String,
    email: String,
    username: String,
    password: String,
    bio: String,
    location: String,
    website: String,
    avatar: String,
    banner: String,
    tweets: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        autopopulate: {
          maxDepth: 2,
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
    bookmarks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tweet",
        autopopulate: {
          maxDepth: 2,
        },
      },
    ],
  },
  { timestamps: true },
  { collection: "profiles" }
);

// For schema methods.
class ProfileClass {
  // AUTHENTICATION
  signIn() {
    this.isOnline = true;
    this.notifications.unshift({
      type: "twitter",
      message: `There was a login to your account @${
        this.username
      } from a new device ${getDate()}. Review it now.`,
    });
    return this.save();
  }
  signOut() {
    this.isOnline = true;
    return this.save();
  }
  // PROFILE EDIT
  changeAvatar(url) {
    this.avatar = url;
    return this.save();
  }
  updateProfile({ fname, lname, bio, location, website }) {
    this.fname = fname;
    this.lname = lname;
    this.location = location;
    this.website = website;
    this.bio = bio;
    return this.save();
  }
  // TWEET
  tweet(tweet) {
    this.tweets.push(tweet);
    return this.save();
  }

  async retweet(originalTweet) {
    const retweet = new Tweet({ author: this, type: "retweet" });
    retweet.originalTweet = originalTweet;
    this.tweets.push(retweet);
    originalTweet.retweets.push(retweet);
    await retweet.save();
    await originalTweet.save();
    await this.save();
  }

  deleteTweet(id) {
    this.tweets = this.tweets.filter(
      (tweets) => String(tweets._id) !== String(id)
    );
    return this.save();
  }

  editTweet(tweet, body) {
    tweet.body = body;
    return tweet.save();
  }
  // TWEET COMMENT
  newReply(tweet, reply) {
    tweet.replies.unshift(reply);
    return tweet.save();
  }

  deleteReply(tweet, comment) {
    //!DOES NOT WORK FOR NOW
  }
  //TWEET LIKE
  like(tweet) {
    const didThisUserLiked = tweet.likes.find(
      (like) => like.username === this.username
    );
    if (didThisUserLiked) return;
    tweet.likes.push(this);
    return tweet.save();
  }
  unlike(tweet) {
    tweet.likes = tweet.likes.filter((like) => like.username !== this.username);
    return tweet.save();
  }
  // BOOKMARKS
  addBookmark(tweet) {
    this.bookmarks.push(tweet);
    return this.save();
  }
  removeBookmark(tweet) {
    this.bookmarks = this.bookmarks.filter(
      (bookmark) => String(bookmark._id) !== String(tweet._id)
    );
    return this.save();
  }
  // FOLLOW AND UNFOLLOW
  async follow(profile) {
    if (this.following.find((follow) => follow.username === profile.username)) {
      return;
    }
    profile.followers.push(this);
    profile.notifications.unshift({
      type: "follow",
      message: `${this.username} has started following you ${getDate()}`,
    });
    this.following.push(profile);
    await this.save();
    await profile.save();
  }

  async unfollow(profile) {
    profile.followers = profile.followers.filter(
      (follow) => follow.username !== this.username
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
