import React from "react";
import ruchka from "../../Assests/Img/ruchkas.png";
import "./ProductPage.css";
import Fade from "react-reveal/Fade";

function ProductPage() {
  return (
    <div className="about">
      <div className="container">
        <Fade left>
          <div className="about-page">
            <img src={ruchka} alt="" className="about-img" />
          </div>
        </Fade>
        <Fade right>
          <div className="about-left">
            <h3 className="about-name">Ручки</h3>
            <h4 className="about-names">Ручка шариковая BAY </h4>
            <p className="about-cost">
              {" "}
              <span>от</span> 78,75 $
            </p>
            <p className="about-cost">
              {" "}
              <span>Доступно</span> DP729491/327G
            </p>
            <p className="about-cost">
              {" "}
              <span>от</span> 15004
            </p>
            <p className="about-cost">
              {" "}
              <span>Бренд:</span> MAXEMA
            </p>
            <button className="about-button">Buy Now</button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default ProductPage;
