import React, { Component } from "react";
import SocialIcons from "../components/SocialIcons";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="container flex">
          <div className="vertical-center author">
            <p>
              Adrian Yadav
              <span className="highlight-alt">&nbsp; &copy; 2018</span>
            </p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    );
  }
}
