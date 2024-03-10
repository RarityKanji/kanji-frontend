import React from "react"
import { NavLink } from "react-router-dom"

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container">
            <h1>Privacy Policy</h1>
            <p>Last updated: February 13, 2024</p>
            
            <p>Welcome to Kanji, a portfolio project accessible from our project website. This project is designed to showcase our full-stack development capabilities, focusing on React and Ruby on Rails. The privacy of our visitors and potential employers is a priority for us. This Privacy Policy outlines the types of information collected by Kanji and its use.</p>

            <h2>Scope of This Privacy Policy</h2>
            <p>This Privacy Policy applies only to the Kanji application, part of our portfolio. It aims to demonstrate our skills in software development and is not intended for commercial use. The information you provide is used solely within the context of this project.</p>

            <h2>Social Media and Networking Platforms</h2>
            <p>Our website includes links to social media and professional networking platforms, such as LinkedIn and GitHub, to allow our visitors to connect with us professionally. When you choose to follow these links, you will be directed to our profiles on these platforms. Please note that any interaction on these platforms is subject to the privacy policies of the respective platforms. We encourage you to read the privacy policies of LinkedIn and GitHub to understand how they collect, use, and share your personal information.</p>

            <h2>Information We Collect and Purpose</h2>
            <p>The personal information we collect is minimal, reflecting the non-commercial, demonstrative nature of this project:</p>
            <ul>
                <li>Contact Information: Should you choose to contact us through our website, we may collect your name, email address, and any information you provide in your message to respond to your inquiries.</li>
                <li>Project Feedback: If you provide feedback on our project, we may collect your name, email, and any comments you provide to improve our portfolio.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>The information collected through the Kanji project is used to:</p>
            <ul>
                <li>Understand user interaction with the project for improvement purposes</li>
                <li>Respond to inquiries and feedback</li>
                <li>Highlight project features and updates</li>
            </ul>

            <h2>No Log Files</h2>
            <p>Unlike many web applications, Kanji does not follow a standard procedure of using log files. This choice reflects our commitment to privacy and data minimization in portfolio projects.</p>

            <h2>Commitment to Privacy</h2>
            <p>As this is a portfolio project, we are committed to the principles of privacy by design and data minimization. We do not use your information beyond the scope necessary to present the project and communicate with interested parties.</p>

            <p>If you have questions or need more information about our Terms of Use, please feel free to <NavLink to="/contact-us">contact us</NavLink>.</p>
        </div>
    )
}

export default PrivacyPolicy