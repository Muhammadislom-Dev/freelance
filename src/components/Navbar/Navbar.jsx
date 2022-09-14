import React from "react";
import "./Navbar.css";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import digital from "../../Assests/Img/digital.png";
import search from "../../Assests/Img/search.png";
import phone from "../../Assests/Img/phone.png";

function Navbar() {
  return (
    <div className="navbar">
      <Fade top>
        <div className="container">
          <Link className="navbar-link" to="/">
            <img src={digital} alt="" className="navbar-img" />
          </Link>
          <form className="navbar-form">
            <input
              type="text"
              required
              placeholder="Search..."
              className="navbar-input"
            />
            <button type="submit" className="navbar-button">
              <img src={search} alt="" className="navbar-image" />
            </button>
          </form>
          <div className="navbar-list">
            <a href="+74952217843" className="navbar-phone">
              <img src={phone} alt="" className="navbar-pic" /> +7 (495)
              221-78-43
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Navbar;
