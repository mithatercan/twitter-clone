import React from "react";
import { BsThreeDots } from "react-icons/all";
function TrendsCard() {
  const trends = [
    { tag: "#Covid19" },
    { tag: "#JavaScript" },
    { tag: "#React" },
    { tag: "#NFT Creators" },
    { tag: "#Bitcoin" },
    { tag: "#PWA" },
  ];
  return trends.map((trend, idx) => (
    <div key={idx} className="trend display-flex justify-content-sb">
      <div>
        <small>Trending in the World</small>
        <h4>{trend.tag}</h4>
      </div>
      <BsThreeDots />
    </div>
  ));
}

export default TrendsCard;
