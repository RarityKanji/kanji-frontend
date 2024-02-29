import React from "react"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2>Ahoy! This Map Leads you Uncharted Territories</h2>
      <p>The page you seek may have shifted in the sands of time, awaiting rediscovery. Let's continue the quest for other treasures instead.</p>
      <NavLink to="/" className="home-link" activeClassName="active">Return Home</NavLink>
    </div>
  )
}

export default NotFound