import React, { Component } from "react";
import "./Projects.scss";

import Fade from "react-reveal/Fade";

class Projects extends Component {
  render() {
    return (
      <div className="flex-row projects-container">
        <Project projectName="uPaged" projectLanguage="Landing page" />
        <Project projectName="IOOF Alliances" projectLanguage="Landing page" />
        <Project projectName="IOOF Federal Budget" projectLanguage="Website" />
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
        className="flex-small card"
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}>
        <div className="card-info">
          <div className="horizontal-center project-meta">
            <Fade when={this.state.isMouseInside} top>
              <div className="project-name">{this.props.projectName}</div>
              <div className="highlight">{this.props.projectLanguage}</div>
            </Fade>
          </div>

          <div className="horizontal-center learn-more-container">
            <Fade when={this.state.isMouseInside} bottom>
              <button className="button learn-more-button">LEARN MORE</button>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
