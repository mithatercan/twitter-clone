import React from "react";
import FollowerBtns from "../button/FollowerBtns";
import { useSelector } from "react-redux";

function ProfileCard({ profile }) {
  const user = useSelector((state) => state.profile.data);

  return (
    <div>
      username : {profile.username}
      <br />
      followers : {profile.followers.length}
      <br />
      following : {profile.following.length}
      <button>
        {user.username === profile.username ? (
          "edit profile"
        ) : (
          <FollowerBtns profile={profile} />
        )}
      </button>
    </div>
  );
}

export default ProfileCard;
