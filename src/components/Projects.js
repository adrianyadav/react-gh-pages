import React, { Component } from "react";
import "./Projects.scss";

import Fade from "react-reveal/Fade";

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
        <div className="card-info">
          <div className="text vertical-center">
            <div className="project-name">
              <Fade when={false} top>
                Roambi
              </Fade>
              <div className="highlight">Pure JavaScript</div>
            </div>
          </div>
          <button className="button learn-more-button" id="roambi">
            <Fade when={false} bottom>
              LEARN MORE
            </Fade>
          </button>
        </div>
      </div>
    );
  }
}

export default Projects;
