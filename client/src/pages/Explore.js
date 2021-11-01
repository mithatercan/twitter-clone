import React, { useEffect, useState } from "react";
import * as api from "../api/requests/tweet";
import { useSelector } from "react-redux";
import TweetCard from "../components/card/TweetCard";
function Explore() {
  const [state, setState] = useState([]);
  const profile = useSelector((state) => state.profile.data);

  const fetchData = async () => {
    const response = await api.getAllTweets(profile.token);
    if (response.type === "success") {
      setState(response.data);
    } else {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {state.map((tweet) => (
        <TweetCard tweet={tweet} />
      ))}
    </div>
  );
}

export default Explore;
