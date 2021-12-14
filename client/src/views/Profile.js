import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProfileCard from "../components/card/ProfileCard";
import TweetCard from "../components/card/TweetCard/TweetCard";
import {
  getProfileTweets,
  getVisitedProfile,
} from "../redux/actions/visitedProfileActions";
const Profile = () => {
  const { username } = useParams();
  const { data, tweets } = useSelector((state) => state.visitedProfile);
  const { modifiedTweet, newRetweet } = useSelector((state) => state.tweet);
  const currentProfile = useSelector((state) => state.currentProfile.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getVisitedProfile(username));
    dispatch(getProfileTweets(username));
  }, [dispatch, username, modifiedTweet, newRetweet]);

  return (
    <div>
      {data && (
        <div>
          <ProfileCard
            profile={data}
            currentProfile={currentProfile.username === username}
          />
          {tweets &&
            tweets.map((tweet) => <TweetCard key={tweet._id} tweet={tweet} />)}
        </div>
      )}
    </div>
  );
};

export default Profile;
