import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import sidebarLinks from "../../utils/sidebarLinks";
import SidebarCard from "../card/SidebarCard";
import SidebarModal from "../modal/SidebarModal";

function SidebarLeft() {
  const location = useLocation();
  const pathWithoutParams = location.pathname.split("/")[1];
  const { username } = useSelector((state) => state.currentProfile.data);
  return (
    <aside className="sidebar-left display-flex justify-content-sb ">
      {sidebarLinks.map((link, linkIdx) => (
        <Link
          className={`sidebar-left__link sidebar-left__link--${link.class} ${
            pathWithoutParams === link.path.split("/")[1] &&
            pathWithoutParams !== "tweet"
              ? "active"
              : null
          }`}
          key={linkIdx}
          to={link.class === "profile" ? link.path + username : link.path}
        >
          {link.icon !== "" && <link.icon className="sidebar-left__icon" />}
          <p className="sidebar-left__text">{link.text}</p>
        </Link>
      ))}
      <SidebarCard />
      <SidebarModal />
    </aside>
  );
}

export default SidebarLeft;
