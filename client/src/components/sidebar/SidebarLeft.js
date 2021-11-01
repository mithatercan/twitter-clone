import React from "react";
import { Link } from "react-router-dom";
import sidebarLinks from "../../utils/sidebarLinks";
import { useSelector } from "react-redux";
function SidebarLeft() {
  const profile = useSelector((state) => state.profile);
  return (
    <aside className="sidebar-left display-flex justify-content-sb ">
      {sidebarLinks.map((link, linkIdx) => (
        <Link
          className={`sidebar-left__link sidebar-left__link--${link.class}`}
          key={linkIdx}
          to={
            link.class === "profile"
              ? link.path + profile.data.username
              : link.path
          }
        >
          <link.icon className="sidebar-left__icon" />
          <p className="sidebar-left__text">{link.text}</p>
        </Link>
      ))}
    </aside>
  );
}

export default SidebarLeft;
