import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import "./Nav.scss";

// Credit to https://gist.github.com/agm1984 for this

/**
 * This utility function allows function calls to be debounced.
 * @param {Function} func Function that requires debouncing
 * @param {Number} wait Wait time in milliseconds between successive invocations
 */
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0
    };
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 2 frames (ie: 16.7 * 2)
    return window.addEventListener("scroll", debounce(this.handleScroll, 32));
  }

  componentWillUnmount() {
    return window.removeEventListener(
      "scroll",
      debounce(this.handleScroll, 32)
    );
  }

  handleScroll = () => {
    // + is unary operator, same as Number(scrollPositionY)
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  };

  render() {
    const isScrolling = !!this.state.scrollPositionY;

    return (
      <div className={isScrolling ? "nav-fixed-top" : "nav"}>
        <ScrollspyNav
          scrollTargetIds={["home", "about", "projects", "contact"]}
          activeNavClass="active"
          scrollDuration="500"
          headerBackground="true">
          <nav class="main-nav flex">
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </ScrollspyNav>
      </div>
    );
  }
}

export default Nav;
