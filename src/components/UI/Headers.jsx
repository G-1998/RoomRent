import React from "react";
import { NavLink } from "react-router-dom";
const Headers = () => {
  return (
    <header>
      <div className="container">
        <div className="Grid navbar-grid">
          <div className="Logo">          
            <img src="public/Image/logo.jpg" alt="Logo AI"></img>
             <h2>Easy <h1>Room Finder</h1></h2>                              
          </div>
          
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/RoomSelection">Rooms Section</NavLink>
              </li>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Headers;