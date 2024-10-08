import React from "react";
import { Router } from "react-router-dom";
import logo from "./AI.png";
const Footers = () => {
  return (
    <>
    <footer>
  <div className="container">
    <div className="footer-content">
      <div className="footer-section about">
      <div className="container">
        <div className="Grid navbar-grid">
          <div className="logo">          
            <img src={logo} alt="Logo AI"></img>
            <h2>AI ROBOTICS CLUB<h1>SPU MANDI</h1></h2>  
        </div>
        </div>
        </div>
        <p></p>
      </div>    
      <div className="footer-section social">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://facebook.com" target="_blank" rel="">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="">Instagram</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 AI ROBOTICS CLUB | All Rights Reserved</p>
    </div>
  </div>
</footer>
</>
  );
};
export default Footers;