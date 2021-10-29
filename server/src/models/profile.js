import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
import bcrypt from "bcrypt";
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    name: String,
    email: String,
    username: String,
    password: String,
    bio: String,
    avatar: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
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
  },
  { timestamps: true },
  { collection: "profiles" }
);

// For schema methods.
class ProfileClass {
  async post(post) {
    this.posts.push(post);
    await this.save();
    await post.save();
  }
  async deletePost(id) {
    this.posts = this.posts.filter((post) => post._id !== id);
    await this.save();
  }
  async removeFollow(profile) {
    this.followers = this.followers.filter(
      (follow) => follow.username !== profile.username
    );
    profile.following = profile.following.filter(
      (follow) => follow.username !== this.username
    );
    await this.save();
    await profile.save();
  }
  async follow(profile) {
    profile.followers.push(this);
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
