import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div>
        <ul className="navbar">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/">contact</a>
          </li>
          <li>
            <a href="/">log</a>
          </li>
        </ul>
      </div>
      <div className="h1">
        <h1>Contact List</h1>
      </div>
    </header>
  );
};

export default Header;
