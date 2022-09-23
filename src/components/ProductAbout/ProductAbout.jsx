import React, { useState } from "react";
import "./ProductAbout.css";
import notes from "../../Assests/Img/notes.png";
import Zoom from "react-reveal/Zoom";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";


function ProductAbout() {
  const [modalDetails, setModalDetails] = useState(null);
  const navigate = useNavigate();

  const goToProduct = (id) => {
    setModalDetails(null);
    document.body.style.overflowY = "auto";
    navigate("/products");
  };

  const handleModalDetails = (data) => {
    setModalDetails(data);
    document.body.style.overflowY = data ? "hidden" : "auto";
  };

  return (
    <div className="product">
      <div className="container">
        <h2 className="product-name">Ручки</h2>
        <div className="product-box">
          <div className="product-title">
            <div className="product-img1">
              <img src={notes} alt="" className="product-img" />
            </div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
            <div className="products__item-btns">
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineEye style={{color:"#302780"}} />
              </button>
              <button
                onClick={() => goToProduct()}
                className="products__item-btn"
              >
                <HiArrowRight style={{color:"#302780"}} />
              </button>
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineSearch style={{color:"#302780"}} />
              </button>
            </div>
          </div>
          <div className="product-title">
            <div className="product-img1">
              <img src={notes} alt="" className="product-img" />
            </div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
            <div className="products__item-btns">
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineEye style={{color:"#302780"}} />
              </button>
              <button
                onClick={() => goToProduct()}
                className="products__item-btn"
              >
                <HiArrowRight  style={{color:"#302780"}} />
              </button>
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineSearch style={{color:"#302780"}} />
              </button>
            </div>
          </div>
          <div className="product-title">
            <div className="product-img1">
              <img src={notes} alt="" className="product-img" />
            </div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
            <div className="products__item-btns">
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineEye  style={{color:"#302780"}} />
              </button>
              <button
                onClick={() => goToProduct()}
                className="products__item-btn"
              >
                <HiArrowRight  style={{color:"#302780"}} />
              </button>
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineSearch style={{color:"#302780"}} />
              </button>
            </div>
          </div>

          <div className="product-title">
            <div className="product-img1">
              <img src={notes} alt="" className="product-img" />
            </div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
            <div className="products__item-btns">
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineEye  style={{color:"#302780"}} />
              </button>
              <button
                onClick={() => goToProduct()}
                className="products__item-btn"
              >
                <HiArrowRight style={{color:"#302780"}} />
              </button>
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineSearch style={{color:"#302780"}} />
              </button>
            </div>
          </div>

          <div className="product-title">
            <div className="product-img1">
              <img src={notes} alt="" className="product-img" />
            </div>
            <h3 className="product-names">On Daily Demand</h3>
            <p className="product-cost">5.65 $</p>
            <p className="product-text">
              Lorem ipsum dolor sit amet contur adipiscing elit vam us lacinia.
            </p>
            <div className="products__item-btns">
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineEye style={{color:"#302780"}} />
              </button>
              <button
                onClick={() => goToProduct()}
                className="products__item-btn"
              >
                <HiArrowRight style={{color:"#302780"}} />
              </button>
              <button
                className="products__item-btn"
                onClick={() => handleModalDetails()}
              >
                <AiOutlineSearch style={{color:"#302780"}} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductAbout;
