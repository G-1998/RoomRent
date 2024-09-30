import React, { useState } from "react";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";

const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close the menu when a link is clicked (for mobile view)
  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="container">
        <div className="navbar-grid">
          {/* Logo Section */}
          <div className="logo">
            <img src={Logo} alt="Easy Room Finder Logo" className="logo-img" />
            <div className="logo-text">
              <h2>Easy</h2>
              <h1>Room Finder</h1>
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="hamburger" onClick={toggleMenu}>
            <span className={menuOpen ? "bar active" : "bar"}></span>
            <span className={menuOpen ? "bar active" : "bar"}></span>
            <span className={menuOpen ? "bar active" : "bar"}></span>
          </div>

          {/* Navigation Menu */}
          <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-links">
              <li>
                <NavLink exact to="/" activeClassName="active" onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/RoomSelection" activeClassName="active" onClick={closeMenu}>
                  Rooms Section
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" activeClassName="active" onClick={closeMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/Login" activeClassName="active" onClick={closeMenu}>
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headers;