import React from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon className="header_icon" fontSize="large" />
      </IconButton>
      <img
        className="header_logo"
        src="https://cdn.dribbble.com/users/317483/screenshots/2178662/jwm-logo.gif"
        width="70"
        height="50"
      />
      <IconButton>
        <ForumIcon className="header_icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
