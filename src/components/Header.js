import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import { Link } from "react-scroll"

const logoUrl = `${process.env.PUBLIC_URL}/assets/logo.png`

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const handleLogout = (event) => {
    event.preventDefault()
    logout()
    navigate("/")
  }

  return (
    <div className="header-nav">
      <NavLink to="/" className="logo-link">
        <img src={logoUrl} alt="Kanji Logo" className="header-logo" />
      </NavLink>
      <Nav className="nav">
        <NavItem>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
          <DropdownToggle nav caret className="nav-link">
            Collectibles
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="classes" spy={true} smooth={true} duration={500} className="nav-link">
                Classes
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </NavItem>
        {currentUser ? (
          <>
            <NavItem>
              <button onClick={handleLogout} className="nav-link btn-link">Log Out</button>
            </NavItem>
            
              <NavLink to="/itemnew">
              <button className="nav-link btn-link">Create</button>
              </NavLink>
           
          </>
        ) : (
          <>
            <NavItem>
              <NavLink to="/login" className="nav-link">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link get-started-link">Get Started</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  )
}

export default Header