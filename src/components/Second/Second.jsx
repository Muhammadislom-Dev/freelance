import React from "react";
import "./Second.css";
import blog from "../../Assests/Img/blog1.jpg";
import { CgCalendarDates, CgArrowRightO } from "react-icons/cg";
import { Link } from "react-router-dom";

function Second() {
  return (
    <div className="second">
      <div className="container">
        <h2 className="second-name">Our Blog</h2>
        <div className="second-page">
          <div className="second-list">
            <img src={blog} alt="" className="second-img" />
            <h4 className="second-names">Lorem, ipsum.</h4>
            <div className="second-item">
              <p className="second-date">
                <CgCalendarDates /> 05.09.2022
              </p>
              <Link to="/about1" className="second-btn">
                <span className="blogs__btn-text">Learn More</span>
                <CgArrowRightO className="blogs__btn-icon" />
              </Link>
            </div>
          </div>
          <div className="second-list">
            <img src={blog} alt="" className="second-img" />
            <h4 className="second-names">Lorem, ipsum.</h4>
            <div className="second-item">
              <p className="second-date">
                <CgCalendarDates /> 05.09.2022
              </p>
              <Link to="/about2" className="second-btn">
                <span className="blogs__btn-text">Learn More</span>
                <CgArrowRightO className="blogs__btn-icon" />
              </Link>
            </div>
          </div>
          <div className="second-list">
            <img src={blog} alt="" className="second-img" />
            <h4 className="second-names">Lorem, ipsum.</h4>
            <div className="second-item">
              <p className="second-date">
                <CgCalendarDates /> 05.09.2022
              </p>
              <Link to="/about3" className="second-btn">
                <span className="blogs__btn-text">Learn More</span>
                <CgArrowRightO className="blogs__btn-icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;
