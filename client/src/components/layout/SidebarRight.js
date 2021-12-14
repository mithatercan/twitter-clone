import React from "react";
import TrendsCard from "../card/TrendsCard/TrendsCard";
function SidebarRight() {
  return (
    <aside className="sidebar-right ">
      <input type="search" placeholder="Search tweets" />
      <div className="trends">
        <h3>Trends for you</h3>
        <TrendsCard />
        <a>Show more</a>
      </div>
    </aside>
  );
}

export default SidebarRight;
