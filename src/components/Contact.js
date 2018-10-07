import React, { Component } from "react";
import "./Contact.scss";

class Contact extends Component {
  render() {
    return (
      <div className="flex-row">
        <form action="https://formspree.io/adrianyadav@gmail.com" method="POST">
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
              <span id="close" class="mdi mdi-close" />
            </div>
          </div> */}
          <input
            class="button cta-button float-right contact-button"
            type="submit"
            id="submit"
            value="SUBMIT"
          />
        </form>
      </div>
    );
  }
}

export default Contact;
