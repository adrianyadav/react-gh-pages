import React, { Component } from "react";
import "./SocialIcons.scss";
import { SocialIcon } from "react-social-icons";

class SocialIcons extends Component {
  render() {
    return (
      <nav class="social-nav">
        <ul class="flex-row">
          <li class="flex-small">
            <SocialIcon url="http://linkedin.com/in/aman-adrian-yadav" />
          </li>
          <li class="flex-small">
            <SocialIcon url="mailto:adrianyadav@gmail.com" />
          </li>
          <li class="flex-small">
            <SocialIcon url="http://www.github.com/adrianyadav" />
          </li>
        </ul>
      </nav>
    );
  }
}
export default SocialIcons;
