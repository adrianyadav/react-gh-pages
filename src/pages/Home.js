import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Home.scss";
import Nav from "../components/Nav";
import Features from "../components/Features";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FaArrowRight, FaDivide } from "react-icons/fa";
import Adrian from "../assets/img/adrianyadav.png";

class Home extends Component {
  handleScrollToElement = e => {
    const elementTop = this.gate.offsetTop;
    window.scrollTo(0, elementTop);
  };

  render() {
    return (
      <main>
        <div id="home" className="vertical-center intro">
          <h1>
            Hi, I'm <span className="author">Adrian Yadav</span>. <br /> I'm a
            Web Developer.
          </h1>
          <a onClick={this.handleScrollToElement} className="button cta-button">
            View my work <FaArrowRight />
          </a>
        </div>
        <Nav />

        <section id="about" class="about" ref={elem => (this.gate = elem)}>
          <div className="container flex">
            <div className="h2-container">
              <h2>About</h2>
              <div
                class="header-bar slide-right"
                data-animation="slide-in-right"
                data-delay=".5s"
              />
            </div>
          </div>
          <Features />
          <div className="flex-row profile">
            <div className="flex-large">
              <img class="headshot" src={Adrian} alt="Adrian Yadav" />
              <h3>Who is this guy?</h3>
              <p>
                Currently I am a{" "}
                <span class="job-title">Junior Full Stack Developer</span> for{" "}
                <a
                  target="_blank"
                  class="company-name"
                  href="https://au.linkedin.com/company/rook-studio">
                  Rook Studio
                </a>
                {"."}
                <br />
                In 2016, I completed my Bsc from the University of Otago and
                shortly after moved to Sydney to bring my passion for web
                development into a full time role.
              </p>
            </div>
            <div className="flex-large">
              <Skills />
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container flex">
            <div className="h2-container">
              <h2>Projects</h2>
              <div
                class="header-bar slide-right"
                data-animation="slide-in-right"
                data-delay=".5s"
              />
            </div>
            <Projects />
          </div>
        </section>
        <section id="contact">
          <div className="container flex">
            <div className="h2-container">
              <h2>Contact</h2>
              <p>Have a question or want to work together?</p>
              <div
                class="header-bar slide-right"
                data-animation="slide-in-right"
                data-delay=".5s"
              />
            </div>
            <Contact />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
