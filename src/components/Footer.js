import React, { useState } from "react"
import { NavLink } from "react-router-dom"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for subscribing!")
    setEmail("")
  }

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
        <div className="footer-section get-started-newsletter">
          <div className="get-started">
            <h3>Get Started</h3>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>
          <div className="newsletter">
            <h3>Join Our Exclusive Newsletter</h3>
            <p>Be the first to discover rare treasures and exclusive deals.</p>
            <form onSubmit={handleSubmit} className="newsletter-signup">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy;{new Date().getFullYear()} Kanji
      </div>
    </footer>
  )
}

export default Footer