import React, { Component } from "react";
import "./Contact.scss";
import Fade from "react-reveal/Fade";

class Contact extends Component {
  render() {
    return (
      <div className="flex-row contact-flex">
        <Fade bottom>
          <form
            className="flex-large"
            action="https://formspree.io/adrianyadav@gmail.com"
            method="POST">
            <input placeholder="Name" type="text" name="name" required="" />
            <input
              placeholder="Enter email"
              type="email"
              name="email"
              required=""
            />
            <textarea placeholder="Your Message" type="text" name="message" />
            {/* <div id="success">
            <div>
              Your message was sent successfully. Thanks!
              <span id="close" className="mdi mdi-close" />
            </div>
          </div> */}
            <input
              className="button cta-button float-right contact-button"
              type="submit"
              id="submit"
              value="SUBMIT"
            />
          </form>
        </Fade>
      </div>
    );
  }
}

export default Contact;
