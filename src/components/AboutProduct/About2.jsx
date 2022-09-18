import React from "react";
import P2 from "../../Assests/Img/p2.jpg";
import "./About.css";


const About2 = () => {
  return (
    <div className="aboutp">
      <div className="container">
        <h1 className="about-name">Цифровая печать длиной до 660мм (66см) на плотностях до 350гр</h1>
        <div className="large-container">
          <div className="top">
            <div className="img-container">
              <img className="about-img" src={P2} alt="" />
            </div>
            <p className="about-text" >
              Онлайн-типография №1 Digital-Printing.ru рада предложить вам
              печать "длинных" форматов (до 33х66см) рекламной полиграфии на
              наших современных цифровых печатных машинах. Допустимая плотность
              бумаги и картона при этом составляет до 350гр (это плотнее
              стандартных визиток). Подобный увеличенный формат позволяет нам
              печатать "днинные" буклет размером 3А4 листа - 630х297мм малыми
              тиражами, а также т.н. "суперобложки" для ваших книг, каталогов и
              брошюр. Также мы можем напечатать для вас брошюры и каталоги с
              горизонтальным (АЛЬБОМНЫМ) спуском формата 297х210мм (594х210мм в
              развороте)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
