import React from "react";
import P3 from "../../Assests/Img/p3.jpg";
import "./About.css";

const About3 = () => {
  return (
    <div className="aboutp">
      <div className="container">
        <h1 className="about-name">Открытие раздела интерьерной печати</h1>
        <div className="large-container">
          <div className="top">
            <div className="img-container">
              <img  className="about-img" src={P3} alt="" />
            </div>
            <p className="about-text">
              Мы рады сообщить вам о запуске раздела высококачественной
              Интерьерной печати больших и малых форматов. К вашим услугам самые
              разнообразные материалы от обычной бумаги, до плотных постеров с
              накаткой на пенокартон форматом от А3 (420х297мм) до А0+ шириной
              более метра (1120мм) и любой длиной
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About3;
