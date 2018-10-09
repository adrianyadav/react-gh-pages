import React, { Component } from "react";
import "./Projects.scss";

import Fade from "react-reveal/Fade";

class Projects extends Component {
  render() {
    return (
      <div className="flex-row">
        <Project projectName="uPaged" projectLanguage="Landing page" />
        <Project projectName="IOOF Alliances" projectLanguage="Landing page" />
        <Project projectName="Eureka" projectLanguage="Website" />
      </div>
    );
  }
}

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseInside: false
    };
  }
  mouseEnter = () => {
    this.setState({ isMouseInside: true });
  };
  mouseLeave = () => {
    this.setState({ isMouseInside: false });
  };
  render() {
    return (
      <div
        className="flex-large card"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        <div className="card-info">
          <Fade top>
            <div className="text vertical-center">
              <div className="project-name">
                {this.props.projectName}
                <div className="highlight">{this.props.projectLanguage}</div>
              </div>
            </div>
          </Fade>

          <Fade bottom>
            <button className="button learn-more-button">LEARN MORE</button>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Projects;
