import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="features flex-row">
        <div className="h2-container">
          <h2>Projects</h2>
          <div
            class="header-bar slide-right"
            data-animation="slide-in-right"
            data-delay=".5s"
          />

          <div className="flex-row">
            <Project />
            <Project />

            <Project />
          </div>
        </div>
      </div>
    );
  }
}

class Project extends React.Component {
  render() {
    return (
      <div className="flex-large card">
        <div class="text">
          <div class="bold">Roambi</div>
          <span class="highlight">Pure JavaScript</span>
        </div>
        <div class="button" id="roambi">
          LEARN MORE
        </div>
      </div>
    );
  }
}

export default Projects;
