"use client";

import { useState } from "react";

const Contact = () => {
  return (
    <article className="contact active">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      {/* Contact Form */}
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form 
          action="https://formsubmit.co/alexander.panske@yahoo.com" 
          method="POST"
          className="form"
        >
          {/* Hidden fields for redirection & spam protection */}
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full Name"
              required
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email Address"
              required
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="form-btn" type="submit">
            ✉ <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;