import React, { Component } from "react";
import "./Features.scss";
import { FaBolt, FaLaptop, FaLightbulb, FaRocket } from "react-icons/fa";
import Fade from "react-reveal/Fade";

class Features extends Component {
  render() {
    return (
      <div className="features flex-row">
        <Feature
          iconName=<FaBolt />
          featureHeading="Fast"
          featureText="Fast load times and lag free interaction are my highest priority."
        />

        <Feature
          iconName=<FaLaptop />
          featureHeading="Responsive"
          featureText="My layouts will use all the pixels available to ensure that it works well on any device."
        />

        <Feature
          iconName=<FaLightbulb />
          featureHeading="Intuitive"
          featureText="Easy to use, minimal thinking required - intuitive UX/UI."
        />

        <Feature
          iconName=<FaRocket />
          featureHeading="Dynamic"
          featureText="Websites don't have to be static, I love making pages come to life."
        />
      </div>
    );
  }
}

class Feature extends React.Component {
  render() {
    return (
      <div className="feature flex-large">
        <Fade left>
          <div className="hexagon">{this.props.iconName}</div>
          <div className="feature-heading">{this.props.featureHeading}</div>
          <p className="feature-text">{this.props.featureText}</p>
        </Fade>
      </div>
    );
  }
}

export default Features;
