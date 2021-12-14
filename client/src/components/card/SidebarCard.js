import React from "react";
import { BsThreeDots } from "react-icons/all";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebarModal } from "../../redux/slicers/modalSlicer";
import Avatar from "../avatar/Avatar";
function SidebarCard() {
  const { data } = useSelector((state) => state.currentProfile);
  const { fname, username, avatar } = data;
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleSidebarModal())}
      className="sidebar-left__card display-flex justify-content-sb"
    >
      <div className="display-flex align-items-c">
        <div className="sidebar-left__card--img display-flex justify-content-c align-items-c">
          <Avatar username={username} avatar={avatar} size="small" />
        </div>
        <div className="sidebar-left__card--info">
          <h3>{fname}</h3>
          <small>@{username}</small>
        </div>
      </div>

      <BsThreeDots />
    </div>
  );
}

export default SidebarCard;
