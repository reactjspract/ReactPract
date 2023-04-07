import React from "react";
import icon from "../images/kalyani_icon.jfif";

const Navbar = () => {
  return (
    <>
      <div className="Nav-container">
        <nav className="nav-icon">
          <a href="/">
            <img src={icon} style={{ width: "50px" }} alt="icon" />
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
