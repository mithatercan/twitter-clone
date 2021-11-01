import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/card/ProfileCard";
import * as api from "../api/requests/profile";
import { useSelector } from "react-redux";

const Profile = () => {
  const reRender = useSelector((state) => state.profile.reRender);
  const [profile, setProfile] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getProfileByUsername(username);
      if (response.type === "success") {
        setProfile(response.data);
      } else {
        alert(response.data);
      }
    };
    fetchData();
  }, [reRender]);

  return <div>{profile ? <ProfileCard profile={profile} /> : "Loading.."}</div>;
};

export default Profile;
