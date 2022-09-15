import React from "react";
import "./Carousel.css";
import instagram from "../../Assests/Img/instagram.png";
import img1 from "../../Assests/Img/img1.png";
import instalogo from "../../Assests/Img/insta-logo.jpg";
import Zoom from "react-reveal/Zoom";


function Carousel() {
  return (
    <div className="carousels">
      <div className="container">
        <a href="https://instagram.com" className="carousel-link">
          <img src={instagram} alt="" className="carousel-img" />
          Instagram @digital_printing_ru
        </a>
        <Zoom bottom cascade>
        <div className="carousel-title">
          <div className="carousel-list">
            <img src={img1} alt="" className="carousel-pic" />
            <div className="carousel__item">
              <img src={instalogo} alt="" className="carousel-logo" />
              <div className="carousel-items">
                <a href="#" className="carousel-links">
                  digital_printing_ru
                </a>
                <p className="carousel-day">1 день назад</p>
              </div>
            </div>
            <p className="carousel-text">
              Привет, друзья ✌🏼🍂! Глядя на удивительный простор календарной
              сетки, кто-нибудь задавался вопросом🙄: почему это так здорово
              выглядит{" "}
            </p>
          </div>
          <div className="carousel-list">
            <img src={img1} alt="" className="carousel-pic" />
            <div className="carousel__item">
              <img src={instalogo} alt="" className="carousel-logo" />
              <div className="carousel-items">
                <a href="#" className="carousel-links">
                  digital_printing_ru
                </a>
                <p className="carousel-day">1 день назад</p>
              </div>
            </div>
            <p className="carousel-text">
              Привет, друзья ✌🏼🍂! Глядя на удивительный простор календарной
              сетки, кто-нибудь задавался вопросом🙄: почему это так здорово
              выглядит{" "}
            </p>
          </div>
          <div className="carousel-list">
            <img src={img1} alt="" className="carousel-pic" />
            <div className="carousel__item">
              <img src={instalogo} alt="" className="carousel-logo" />
              <div className="carousel-items">
                <a href="#" className="carousel-links">
                  digital_printing_ru
                </a>
                <p className="carousel-day">1 день назад</p>
              </div>
            </div>
            <p className="carousel-text">
              Привет, друзья ✌🏼🍂! Глядя на удивительный простор календарной
              сетки, кто-нибудь задавался вопросом🙄: почему это так здорово
              выглядит{" "}
            </p>
          </div>
          <div className="carousel-list">
            <img src={img1} alt="" className="carousel-pic" />
            <div className="carousel__item">
              <img src={instalogo} alt="" className="carousel-logo" />
              <div className="carousel-items">
                <a href="#" className="carousel-links">
                  digital_printing_ru
                </a>
                <p className="carousel-day">1 день назад</p>
              </div>
            </div>
            <p className="carousel-text">
              Привет, друзья ✌🏼🍂! Глядя на удивительный простор календарной
              сетки, кто-нибудь задавался вопросом🙄: почему это так здорово
              выглядит{" "}
            </p>
          </div>
        </div>
        </Zoom>
      </div>
    </div>
  );
}

export default Carousel;
