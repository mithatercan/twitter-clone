import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/all";

function Avatar({ username, avatar, size }) {
  return (
    <Link
      to={`/profile/${username}`}
      className={`avatar avatar__${size} display-flex align-items-c justify-content-c`}
    >
      {avatar ? (
        <img src={`${avatar}?${Date.now()}`} alt="avatar" loading="lazy" />
      ) : (
        <FaTwitter />
      )}
    </Link>
  );
}

export default Avatar;
