import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TweetCard from "../components/card/TweetCard/TweetCard";
import { getBookmarks } from "../redux/actions/currentProfileActions";

const Bookmark = () => {
  const { bookmarks, data } = useSelector((state) => state.currentProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, [data.bookmarks, dispatch]);

  return bookmarks ? (
    bookmarks.length > 0 ? (
      bookmarks.map((bookmark) => (
        <TweetCard key={bookmark._id} tweet={bookmark} />
      ))
    ) : (
      <div className="bookmark display-flex flex-direction-c align-items-c">
        <div className="view-wrapper">
          <h2>You haven’t added any Tweets to your Bookmarks yet</h2>
          <p>When you do, they’ll show up here.</p>
        </div>
      </div>
    )
  ) : null;
};

export default Bookmark;
