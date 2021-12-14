import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Avatar from "../avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { newReply } from "../../redux/actions/tweetActions";
import { RiFileGifLine, GrEmoji, FiImage } from "react-icons/all";
import { useParams } from "react-router";

function CommentForm() {
  const { id } = useParams();
  const { username, avatar } = useSelector(
    (state) => state.currentProfile.data
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.body.value;
    dispatch(newReply({ data, id }));
    e.target.reset();
  };

  return (
    <div className="tweet-form display-flex align-items-fs">
      <div className="tweet-form__img display-flex justify-content-c align-items-c">
        <Avatar username={username} avatar={avatar} size="small" />
      </div>
      <form className="tweet-form__form" onSubmit={handleSubmit}>
        <TextareaAutosize name="body" placeholder="Tweet your reply" />
        <div className="display-flex justify-content-sb align-items-c">
          <ul className="display-flex">
            <li>
              <FiImage />
            </li>
            <li>
              <RiFileGifLine />
            </li>
            <li>
              <GrEmoji />
            </li>
          </ul>
          <button>Reply</button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
