import React from "react";

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div className="social-links">
        <a href="https://linkedin.com">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </section>
  );
}

export default Contact;
