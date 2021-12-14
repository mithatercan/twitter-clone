import React from "react";
import { BsStars } from "react-icons/all";
import { useLocation } from "react-router-dom";
function Header() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  return (
    <header className="header display-flex align-items-c justify-content-sb">
      <h3>{path.charAt(0).toUpperCase() + path.slice(1)}</h3>
      <BsStars />
    </header>
  );
}

export default Header;
