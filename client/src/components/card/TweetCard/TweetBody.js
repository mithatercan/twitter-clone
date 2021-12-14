import React from "react";
import { Link } from "react-router-dom";
import TweetCard from "./TweetCard";

function TweetBody({ body, originalTweet }) {
  return (
    <div>
      <pre className="tweet__body">{body}</pre>
      {originalTweet &&
        (originalTweet.originalTweet ? (
          <div>
            <Link to={`tweet/${originalTweet._id}`}>
              tweet/{originalTweet._id}
            </Link>

            {originalTweet.body}
          </div>
        ) : (
          <TweetCard tweet={originalTweet} isRetweeted={originalTweet} />
        ))}
    </div>
  );
}

export default TweetBody;
