import React from "react";
import { FaRegComment } from "react-icons/all";
const ReplyBtn = ({ replies }) => {
  return (
    <div className="display-flex align-items-c tweet-btns__btn tweet-btns__reply">
      <FaRegComment />
      <small>{replies}</small>
    </div>
  );
};

export default ReplyBtn;
