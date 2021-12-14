import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  followVisitedProfile,
  unFollowVisitedProfile,
} from "../../redux/actions/visitedProfileActions";

const FollowBtn = ({ username, followers }) => {
  const { data } = useSelector((state) => state.currentProfile);
  const dispatch = useDispatch();

  const handleFollow = () => {
    dispatch(followVisitedProfile(username));
  };

  const handleUnfollow = () => {
    dispatch(unFollowVisitedProfile(username));
  };

  return followers.some((follower) => follower.username === data.username) ? (
    <button className="unfollow-btn" onClick={handleUnfollow} contentEditable>
      Following
    </button>
  ) : (
    <button className="follow-btn" onClick={handleFollow}>
      Follow
    </button>
  );
};

export default FollowBtn;
