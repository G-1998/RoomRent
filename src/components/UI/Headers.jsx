import React, { useState } from "react";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";
import home from "./home.png";
import room from "./room.png";
import about from "./about.png";
import login from "./login.png";
import FeedbackForm from "../../assets/pages/Feedback";

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
                  <img src={home} alt="Home" className="nav-icon" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/RoomSelection" activeClassName="active" onClick={closeMenu}>
                  <img src={room} alt="Rooms Section" className="nav-icon" />
                  Rooms
                </NavLink>
              </li>
              <li>
                <NavLink to="/About" activeClassName="active" onClick={closeMenu}>
                  <img src={about} alt="About" className="nav-icon" />
                  About
                </NavLink>
              </li>
              <li>
              <NavLink to="/FeedbackForm" activeClassName="active" onClick={closeMenu}>
                  <img src={about} alt="About" className="nav-icon" />
                  Feedback
                </NavLink>
                </li>
              <li>
                <NavLink to="/Login" activeClassName="active" onClick={closeMenu}>
                  <img src={login} alt="Login" className="nav-icon" />
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
