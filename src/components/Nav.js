import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="main-nav flex">
        <ul>
          <li>
            <a className="active" href="">
              Home
            </a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
