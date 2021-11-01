import React from "react";
import SidebarLeft from "../sidebar/SidebarLeft";
import SidebarRight from "../sidebar/SidebarRight";
import Header from "./Header";
import MiniTweetBtn from "../button/MiniTweetBtn";
function Layout({ children }) {
  return (
    <div className="layout display-flex justify-content-sb">
      <SidebarLeft />
      <main className="main flex--2">
        <Header />
        {children}
      </main>
      <MiniTweetBtn />

      <SidebarRight />
    </div>
  );
}

export default Layout;
