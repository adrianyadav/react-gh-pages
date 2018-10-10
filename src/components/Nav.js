import React, { Component } from "react";
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
    // !! coerces value to be a Boolean
    // we want it to be true or false (true if scrollPositionY > 0)
    // it works because scrollPositionY === 0 is falsy
    const isScrolling = !!this.state.scrollPositionY;
    return (
      <div className={isScrolling ? "nav-fixed-top" : "nav"}>
        <nav className="main-nav flex">
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
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
      </div>
    );
  }
}

export default Nav;
