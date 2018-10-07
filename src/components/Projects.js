import React, { Component } from "react";
import "./Projects.scss";

class Projects extends Component {
  render() {
    return (
      <div className="flex-row">
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

class Project extends React.Component {
  render() {
    return (
      <div className="flex-large card">
        <div class="card-info">
          <div class="text vertical-center">
            <div class="project-name">
              Roambi
              <div class="highlight">Pure JavaScript</div>
            </div>
          </div>
          <button class="button learn-more-button" id="roambi">
            LEARN MORE
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
