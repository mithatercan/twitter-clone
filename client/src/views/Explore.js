import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TweetCard from "../components/card/TweetCard/TweetCard";
import Spinner from "../components/Spinner";
import bg from "../assets/images/explore-bg.jpeg";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllTweets } from "../redux/actions/tweetActions";

function Explore() {
  const [page, setPage] = useState(1);

  const tweetState = useSelector((state) => state.tweet);
  const { allTweets, modifiedTweet, newTweet, newRetweet } = tweetState;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTweets(page));
  }, [dispatch, page, modifiedTweet, newTweet, newRetweet]);

  return (
    <div className="explore">
      <img src={bg} alt="" />
      {allTweets ? (
        allTweets.length > 0 ? (
          <InfiniteScroll
            dataLength={allTweets.length}
            next={() => setPage(page + 1)}
            scrollableTarget="main"
            hasMore={true}
          >
            {allTweets.map((tweet, idx) => (
              <TweetCard key={tweet._id} tweet={tweet} />
            ))}
          </InfiniteScroll>
        ) : (
          <div className="display-flex flex-direction-c align-items-c">
            <div className="view-wrapper ">
              <h1>Oppps!</h1>
              <p>There is no tweet yet</p>
            </div>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Explore;
