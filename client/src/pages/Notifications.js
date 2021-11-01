import React from "react";
import { useSelector } from "react-redux";

function Notifications() {
  const profile = useSelector((state) => state.profile.data);

  return profile.notifications.length > 0
    ? profile.notifications.map((notification) => <div>{notification}</div>)
    : "loading..";
}

export default Notifications;
