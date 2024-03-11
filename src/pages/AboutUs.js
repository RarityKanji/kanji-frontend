import React from "react"
import { NavLink } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>A Journey of Mastery and Innovation in Full-Stack Development</h1>
      </div>

      <div className="content-section">
        <p>
          Welcome to Kanji, a full-stack web application that epitomizes
          our transition from aspiring developers to adept professionals in the
          realm of software engineering. This project is not merely a
          demonstration of our proficiency in Ruby on Rails and React.js but a
          narrative of relentless pursuit, innovative problem-solving, and
          collaborative triumph.
        </p>
      </div>

      <h2 className="section-heading">Our Path to Excellence:</h2>
      <div className="key-achievements columns">
        <div className="column">
          <h4>Seamless Integration of Technologies</h4>
          <p>
            We ventured beyond the basics to fuse Ruby on Rails with React.js,
            mastering the MVC architecture and RESTful APIs. This endeavor
            sharpened our backend and frontend development skills, preparing us
            for the complexities of modern web applications.
          </p>
        </div>
        <div className="column">
          <h4>Design That Speaks</h4>
          <p>
            Our commitment to responsive UI design reflects our dedication to
            user satisfaction. We employed adaptive design principles to craft
            interfaces that are not only visually appealing but also highly
            functional, ensuring a seamless experience across devices.
          </p>
        </div>
        <div className="column">
          <h4>Agility in Action</h4>
          <p>
            Embracing agile methodologies, we navigated through challenges with
            resilience and adaptability. Our approach underscores our capability
            to prioritize critical features and respond to feedback swiftly,
            ensuring our project remains aligned with user needs and industry
            trends.
          </p>
        </div>
        <div className="column">
          <h4>Synergy and Leadership</h4>
          <p>
            Kanji is a testament to the power of collaboration. Our project
            underscores the significance of clear communication, mutual respect,
            and shared vision. Through this collaborative effort, we have honed
            our leadership skills, ready to inspire and be integral members of
            any development team.
          </p>
        </div>
      </div>

      <div className="looking-forward">
        <h2 className="section-heading">Looking Forward</h2>
        <p>
          Kanji is more than a project; it's a milestone that marks our
          readiness to embark on a professional journey filled with challenges,
          learning, and achievements. We are eager to contribute to a team that
          values innovation, quality, and a positive impact on the world through
          technology.
        </p>

        <div className="connect-section">
          <h4 className="connect-heading">Ready to Make an Impact Together?</h4>
          <p className="connect-text">
            We're on the lookout for opportunities to bring innovation,
            creativity, and enthusiasm to teams that value progress and
            problem-solving. If that sounds like your team, we'd love to hear
            from you.
          </p>
          <NavLink to="/contact-us" className="connect-button">
            Contact Us Now
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
