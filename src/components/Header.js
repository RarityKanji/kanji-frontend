import React, { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

const logoUrl = `${process.env.PUBLIC_URL}/assets/logo.png`

const Header = ({ currentUser, logout }) => {
  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)

  const scrollToClasses = () => {
    const sectionElement = document.getElementById("classes")
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    logout()
    navigate("/")
  }

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={`header-nav ${isTop ? "" : "scrolled"}`}>
      <NavLink to="/" className="logo-link">
        <img src={logoUrl} alt="Kanji Logo" className="header-logo" />
      </NavLink>
      <div className={`nav-container ${isNavExpanded ? "expanded" : ""}`}>
        <Nav className="nav">
          <NavItem>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <Dropdown nav isOpen={dropdownOpen} toggle={toggleDropdown}>
            <DropdownToggle nav caret className="nav-link">
              Collectibles
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <NavLink
                  to="/"
                  onClick={(e) => {
                    if (window.location.pathname === "/") {
                      e.preventDefault()
                      scrollToClasses()
                    } else {
                    }
                  }}
                  className="nav-link"
                >
                  Classes
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink to="/about-us" className="nav-link">
              About
            </NavLink>
          </NavItem>
          {currentUser ? (
            <>
              <NavItem>
                <button onClick={handleLogout} className="nav-link btn-link">
                  Log Out
                </button>
              </NavItem>
              <NavItem>
                <NavLink to="/itemnew" className="nav-link">
                  Create
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink to="/login" className="nav-link">
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup" className="nav-link get-started-link">
                  Get Started
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </div>
      <button
        className={`hamburger ${isNavExpanded ? "is-active" : ""}`}
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}

export default Header