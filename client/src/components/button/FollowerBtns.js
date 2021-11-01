import React from "react";
import { useSelector } from "react-redux";
import FollowBtn from "./FollowBtn.js";
import UnfollowBtn from "./UnfollowBtn";

const FollowerBtns = ({ profile }) => {
  const user = useSelector((state) => state.profile.data);
  return profile.followers.some(
    (follower) => follower.username === user.username
  ) ? (
    <UnfollowBtn profile={profile} />
  ) : (
    <FollowBtn profile={profile} />
  );
};

export default FollowerBtns;
