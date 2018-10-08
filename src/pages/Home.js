import React, { Component } from "react";

import "./Home.scss";
import Nav from "../components/Nav";
import Features from "../components/Features";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { FaArrowRight } from "react-icons/fa";
import Particles from "react-particles-js";
import Adrian from "../assets/img/adrianyadav.png";
import Typing from "react-typing-animation";

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
            <Typing speed={50}>
              Hi, I'm <span className="author">Adrian Yadav</span>. <br /> I'm a
              Web Developer.
            </Typing>
          </h1>
          <button
            onClick={this.handleScrollToElement}
            className="button cta-button">
            View my work <FaArrowRight />
          </button>
          <Particles
            params={{
              particles: {
                number: {
                  value: 160,
                  density: { enable: true, value_area: 800 }
                },
                color: { value: "#ffffff" },
                shape: {
                  type: "circle",
                  stroke: { width: 0, color: "#000000" },
                  polygon: { nb_sides: 5 },
                  image: { src: "img/github.svg", width: 100, height: 100 }
                },
                opacity: {
                  value: 0.5,
                  random: true,
                  anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
                },
                size: {
                  value: 2,
                  random: true,
                  anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
                },
                line_linked: {
                  enable: false,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: { enable: false, rotateX: 600, rotateY: 600 }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: { enable: true, mode: "bubble" },
                  onclick: { enable: true, mode: "repulse" },
                  resize: true
                },
                modes: {
                  grab: { distance: 400, line_linked: { opacity: 1 } },
                  bubble: {
                    distance: 250,
                    size: 0,
                    duration: 2,
                    opacity: 0,
                    speed: 3
                  },
                  repulse: { distance: 400, duration: 0.4 },
                  push: { particles_nb: 4 },
                  remove: { particles_nb: 2 }
                }
              },
              retina_detect: true
            }}
          />
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
                  href="https://au.linkedin.com/company/rook-studio"
                  rel="noopener noreferrer">
                  Rook Studio
                </a>
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
              <div
                class="header-bar slide-right"
                data-animation="slide-in-right"
                data-delay=".5s"
              />
            </div>
            <p>Have a question or want to work together?</p>
            <Contact />
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
