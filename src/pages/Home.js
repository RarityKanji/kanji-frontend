import React from "react"
import { NavLink } from "react-router-dom"

const gifHome = "https://i.giphy.com/PipqS8rFolj0393M1O.webp"

const Home = () => {
  return (
    <div>
      <div className="intro-section" style={{ backgroundImage: `url(${gifHome})` }}>
        <h1>THE WORLD'S TREASURES MADE ACCESSIBLE TO ALL</h1>
        <NavLink to="/signup" className="join-button">
          Join us now
        </NavLink>
      </div>

      <div className="services-overview">
        <h2>Why Choose Kanji?</h2>
        <div className="service-cards-container">
          <div className="service-card">
            <h3>Simple and Intuitive</h3>
            <p>
              Our drag-and-drop interface makes collectible management a breeze,
              even if you have no coding experience.
            </p>
          </div>
          <div className="service-card">
            <h3>Stunning Store</h3>
            <p>
              Choose from a wide range of professionally designed templates
              tailored to showcase rare collectibles.
            </p>
          </div>
          <div className="service-card">
            <h3>Powerful Features</h3>
            <p>
             Power Your Store with Secure Payments, Inventory Contol, and SEO mastery.
            </p>
          </div>
          <div className="service-card">
            <h3>Scalability</h3>
            <p>
              Start small and grow big! Our platform is equipped to handle your
              collection's growth, ensuring a seamless experience.
            </p>
          </div>
        </div>
      </div>

      <div className="rare-categories-section" id="classes">
        <h2>Classes</h2>
        <div className="categories">
          <NavLink to="/collectibles/cards" className="category">
            Cards
          </NavLink>
          <NavLink to="/collectibles/books" className="category">
            Books
          </NavLink>
          <NavLink to="/collectibles/gems" className="category">
            Gems
          </NavLink>
        </div>
      </div>

      <div className="trust-section">
        <h2>Trusted by</h2>
        <ul className="trusted-logos">
          <li>
            <img
              src="http://tinyurl.com/5n8xk8tc"
              alt="The Metropolitan Museum of Art Logo"
            />
          </li>
          <li>
            <img
              src="http://tinyurl.com/kasjzd7v"
              alt="Smithsonian Institution Logo"
            />
          </li>
          <li>
            <img
              src="http://tinyurl.com/28n5zztw"
              alt="National Gallery of Art Logo"
            />
          </li>
          <li>
            <img src="http://tinyurl.com/eekdmhps" alt="The Louvre Logo" />
          </li>
          <li>
            <img
              src="http://tinyurl.com/2arn4fyt"
              alt="Museum of Modern Art (MoMA) Logo"
            />
          </li>
        </ul>
      </div>

      <div className="call-to-action">
        <h2>Ready to Launch Your Online Store? Start Today!</h2>
        <NavLink to="/get-started" className="start-now-button">
          Start now
        </NavLink>
      </div>
    </div>
  )
}

export default Home