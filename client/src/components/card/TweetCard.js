import React from "react";
import {
  AiOutlineRetweet,
  FaRegComment,
  AiOutlineHeart,
  IoShareOutline,
} from "react-icons/all";
import { useHistory } from "react-router-dom";

const TweetCard = ({ tweet }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(`/profile/${tweet.author.username}`);
  };
  return (
    <div className="tweet display-flex">
      <img
        onClick={handleClick}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhV4Efn-jomHfMcBK8stShBUJzbNcVn4y7dXD6RD2UjElYfjTJPrOUS--rhc4A040ElM&usqp=CAU"
        alt="avatar"
      />
      <div>
        <div
          onClick={handleClick}
          className="tweet__profile display-flex align-items-c"
        >
          <p className="tweet__profile--name">{tweet.author.fname}</p>
          <p className="tweet__profile--username">{tweet.author.username} 2h</p>
        </div>
        <p className="tweet__body">{tweet.body}</p>
        <div className="tweet__icons display-flex justify-content-sb ">
          <FaRegComment />
          <AiOutlineRetweet />
          <AiOutlineHeart />
          <IoShareOutline />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
