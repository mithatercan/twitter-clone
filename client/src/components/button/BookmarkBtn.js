import React from "react";
import { MdOutlineBookmarkBorder, MdOutlineBookmark } from "react-icons/all";
import {
  addBookmark,
  removeBookmark,
} from "../../redux/actions/currentProfileActions";
import { useSelector, useDispatch } from "react-redux";

function BookmarkBtn({ id }) {
  const { data } = useSelector((state) => state.currentProfile);
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeBookmark(id));
  };

  const add = (e) => {
    e.preventDefault();
    dispatch(addBookmark(id));
  };

  return data.bookmarks.some((bookmark) => bookmark._id === id) ? (
    <button
      onClick={remove}
      className="display-flex align-items-c tweet-btns__btn tweet-btns__bookmark--active"
    >
      <MdOutlineBookmark />
    </button>
  ) : (
    <button
      onClick={add}
      className="display-flex align-items-c tweet-btns__btn tweet-btns__bookmark"
    >
      <MdOutlineBookmarkBorder />
    </button>
  );
}

export default BookmarkBtn;
