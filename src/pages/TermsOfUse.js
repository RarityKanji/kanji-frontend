import React from "react"
import { NavLink } from "react-router-dom"

const TermsOfUse = () => {
    return (
        <div className="terms-container">
            <h1>Terms of Use</h1>
            <p>Last updated: March 2024</p>

            <p>Welcome to Kanji, a portfolio project designed to showcase our development skills with React and Ruby on Rails. The following terms and conditions govern your use of the Kanji web application, accessible from our portfolio website.</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing and using Kanji, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree with any part of these terms, you are prohibited from using this site.</p>

            <h2>Intellectual Property Rights</h2>
            <p>Unless otherwise stated, Kanji and its creators own the intellectual property rights for all material on Kanji. All intellectual property rights are reserved. You may access this from Kanji for your personal use subjected to restrictions set in these terms and conditions.</p>

            <h2>Use Restrictions</h2>
            <p>You are specifically restricted from the following actions:</p>
            <ul>
                <li>Publishing any website material in any other media without prior consent.</li>
                <li>Commercializing any website material.</li>
                <li>Publicly performing or showing any website material.</li>
                <li>Using the website in any way that is harmful to the website or its users.</li>
                <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website.</li>
            </ul>

            <h2>Content You Provide</h2>
            <p>"Your Content" refers to any audio, video, text, images, or other material you choose to display on Kanji. With Your Content, you grant Kanji a non-exclusive, worldwide, irrevocable license to use, reproduce, adapt, and distribute it for showcasing the project and related purposes.</p>

            <h2>No Warranties</h2>
            <p>This website is provided "as is," with all faults, and Kanji expresses no representations or warranties of any kind related to this website or the materials contained on this website. Also, nothing contained on this website shall be interpreted as advising you.</p>

            <h2>Limitation of Liability</h2>
            <p>In no event shall Kanji, nor any of its creators, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract, tort, or otherwise.</p>

            <h2>Modifications to Terms</h2>
            <p>We reserve the right to modify these terms at any time. By continuing to access or use Kanji after those revisions become effective, you agree to be bound by the revised terms.</p>

            <p>If you have questions or need more information about our Terms of Use, please feel free to <NavLink to="/contact-us">contact us</NavLink>.</p>
        </div>
    )
}

export default TermsOfUse