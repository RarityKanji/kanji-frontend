import React from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kanji</h3>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-of-use">Terms of Use</NavLink>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
        <div className="footer-section">
          <h3>Get Started</h3>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </div>
      <div className="footer-bottom">
        &copy;{new Date().getFullYear()} Kanji. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer