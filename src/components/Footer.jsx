import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="portfolio-footer">
      <p>Designed & Built by <strong>Janani Saravanan</strong> © {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
