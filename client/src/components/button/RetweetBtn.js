import React from "react";
import { AiOutlineRetweet } from "react-icons/all";
import { useDispatch } from "react-redux";
import { newRetweet } from "../../redux/actions/tweetActions";
const RetweetBtn = ({ id, retweets }) => {
  const dispatch = useDispatch();

  const retweet = (e) => {
    e.preventDefault();
    dispatch(newRetweet(id));
  };

  return (
    <button
      onClick={retweet}
      className="display-flex align-items-c tweet-btns__btn tweet-btns__retweet"
    >
      <AiOutlineRetweet />
      <small>{retweets}</small>
    </button>
  );
};

export default RetweetBtn;
