import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

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
    <div>
      <header className="header">
      </header>
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
              <NavLink to="/collectibles/cards" className="nav-link">Cards</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/collectibles/books" className="nav-link">Books</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink to="/collectibles/gems" className="nav-link">Gems</NavLink>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {currentUser ? (
          <>
            <NavItem>
              <NavLink to="/mycollectibles" className="nav-link">My Collectibles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/itemnew" className="nav-link">Add New Collectible</NavLink>
            </NavItem>
            <NavItem>
              <button onClick={handleLogout} className="nav-link btn-link">Log Out</button>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink to="/login" className="nav-link">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">Sign Up</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </div>
  )
}

export default Header