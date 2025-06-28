import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">📬 Let's Connect</h2>

      <div className="contact-card">
        <div className="contact-row">
          <FaEnvelope className="contact-icon" />
          <div>
            <p>Email</p>
            <a href="mailto:s.jananisathya57@gmail.com">s.jananisathya57@gmail.com</a>
          </div>
        </div>

        <div className="contact-row">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <p>Phone</p>
            <a href="tel:+919791611193">+91 97916 11193</a>
          </div>
        </div>

        <div className="resume-download">
          <a
            href="src\resume.pdf"
            download="Janani_Saravanan_Resume.pdf"
            className="download-btn"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
