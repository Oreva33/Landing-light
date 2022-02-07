import React from "react";
import "./NavBar.css";
import avatar from "../media/cardi.PNG";
import react from "react";

const NavBar = () => {
  return (
    <react.Fragment>
      <div className="nav-wrapper">
        <span>
          <a href="http://www.google.com/">TRIPS</a>
        </span>
        <span>
          <a href="http://www.google.com/">RECENTLY VIEWED</a>
        </span>
        <span>
          <a href="http://www.google.com/">BOOKINGS</a>
        </span>
        <span>
        <img src={avatar} alt="profile pics" />
      </span>
      </div>
    </react.Fragment>
  );
};

export default NavBar;
