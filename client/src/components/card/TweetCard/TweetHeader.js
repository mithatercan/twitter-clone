import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/all";
import getTweetTime from "../../../utils/getTweetTime";
import { toggleTweetEditorModal } from "../../../redux/slicers/modalSlicer";

const TweetHeader = ({ author, createdAt, tweet }) => {
  const { username } = useSelector((state) => state.currentProfile.data);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(toggleTweetEditorModal(tweet));
  };
  return (
    <div className="display-flex justify-content-sb align-items-c">
      <Link
        className="tweet__profile display-flex align-items-c"
        to={`/profile/${author.username}`}
      >
        <p className="tweet__profile--name">{author.fname}</p>
        <p className="tweet__profile--username">@{author.username} </p>
        <p className="tweet__profile--time">{getTweetTime(createdAt)}</p>
      </Link>
      {username === author.username && (
        <BsThreeDots className="tweet-btns__btn" onClick={handleClick} />
      )}
    </div>
  );
};

export default TweetHeader;
