import React, { Component } from "react";
import IconAmazonwebservices from "react-devicon/amazonwebservices/original-wordmark";

import "./Skills.scss";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaPhp,
  FaDatabase
} from "react-icons/fa";

class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="flex-row ">
          <div className="flex-large">
            <h3>Skills</h3>
            {/* <i class="devicon-devicon-plain" /> */}
          </div>
        </div>
        <div className="flex-row">
          <Skill iconName="devicon-html5-plain-wordmark colored" />
          <Skill iconName="devicon-css3-plain-wordmark colored" />
          <Skill iconName="devicon-javascript-plain colored" />
          <Skill iconName="devicon-jquery-plain-wordmark colored" />
          <Skill iconName="devicon-sass-original colored" />
          <Skill iconName="devicon-bootstrap-plain-wordmark colored" />
          <Skill iconName="devicon-react-original-wordmark colored" />
          <Skill iconName="devicon-php-plain colored" />
          <Skill iconName="devicon-mysql-plain-wordmark colored" />
          <Skill iconName="devicon-github-plain-wordmark colored" />
          <Skill iconName="devicon-photoshop-line colored" />
          <Skill iconName="devicon-visualstudio-plain colored" />
        </div>
      </div>
    );
  }
}

class Skill extends React.Component {
  render() {
    return (
      <div className="skill flex-large">
        <i class={this.props.iconName} />
      </div>
    );
  }
}

export default Skills;
