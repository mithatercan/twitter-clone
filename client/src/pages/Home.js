import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import * as api from "../api/requests/tweet";
import MiniTweetBtn from "../components/button/MiniTweetBtn";
import NewTweetForm from "../components/form/NewTweetForm";
import TweetCard from "../components/card/TweetCard";

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const profile = useSelector((state) => state.profile.data);

  useEffect(() => {
    const fethData = async () => {
      const response = await api.getFollowingTweets(profile.token);
      if (response.type === "success") {
        setTweets(response.data);
      }
    };
    fethData();
  }, []);

  return (
    <div className="home">
      <NewTweetForm />
      {tweets.map((tweet) => (
        <TweetCard key={tweet._id} tweet={tweet} />
      ))}
    </div>
  );
};

export default Home;
