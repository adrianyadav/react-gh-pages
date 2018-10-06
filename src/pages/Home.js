import React, { Component } from "react";
import "./Home.scss";
import Nav from "../components/Nav";

class Home extends Component {
  render() {
    return (
      <div className="root">
        <h1>
          Hi, I'm <span className="author">Adrian Yadav</span>. <br /> I'm a Web
          Developer.
        </h1>
        <Nav />
      </div>
    );
  }
}

export default Home;
