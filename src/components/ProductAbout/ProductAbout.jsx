import React from "react";
import "./ProductAbout.css";
import notes from "../../Assests/Img/notes.png";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";

function ProductAbout() {
  return (
    <div className="product">
      <div className="container">
        <h2 className="product-name">Ручки</h2>
        <div className="product-box">
          <div className="product-title">
            <div className="product-img1"><img src={notes} alt="" className="product-img" /></div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
          </div>
          <div className="product-title">
            <div className="product-img1"><img src={notes} alt="" className="product-img" /></div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
          </div>
          <div className="product-title">
            <div className="product-img1"><img src={notes} alt="" className="product-img" /></div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
          </div>

          <div className="product-title">
            <div className="product-img1"><img src={notes} alt="" className="product-img" /></div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
          </div>

          <div className="product-title">
            <div className="product-img1"><img src={notes} alt="" className="product-img" /></div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAbout;
