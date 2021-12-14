import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { likeTweet, unlikeTweet } from "../../redux/actions/tweetActions";

function LikeBtn({ id, likes }) {
  const { data } = useSelector((state) => state.currentProfile);
  const dispatch = useDispatch();

  const unlike = (e) => {
    e.preventDefault();
    dispatch(unlikeTweet(id));
  };

  const like = (e) => {
    e.preventDefault();
    dispatch(likeTweet(id));
  };

  return likes.some((like) => like._id === data._id) ? (
    <button
      onClick={unlike}
      className="display-flex align-items-c tweet-btns__btn tweet-btns__like--active"
    >
      <AiFillHeart />
      <small>{likes.length}</small>
    </button>
  ) : (
    <button
      onClick={like}
      className="display-flex align-items-c tweet-btns__btn tweet-btns__like"
    >
      <AiOutlineHeart />
      <small>{likes.length}</small>
    </button>
  );
}

export default LikeBtn;
