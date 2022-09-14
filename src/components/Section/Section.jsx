import React from "react";
import Fade from "react-reveal/Fade";
import "./Section.css";
import baner from "../../Assests/Img/baner.jpg";
import kitob from "../../Assests/Img/kitob.jpg";
import karta from "../../Assests/Img/karta.jpg";
import albom from "../../Assests/Img/albom.jpg";
import viza from "../../Assests/Img/viza.jpg";
import tel from "../../Assests/Img/tel.jpg";
import i1 from '../../Assests/Img/1.jpg'
import i2 from '../../Assests/Img/2.jpg'
import i3 from '../../Assests/Img/3.jpg'
import i4 from '../../Assests/Img/4.jpg'
import i5 from '../../Assests/Img/5.jpg'
import i6 from '../../Assests/Img/6.jpg'
import i10 from '../../Assests/Img/10.png'
import i11 from '../../Assests/Img/11.png'
import i12 from '../../Assests/Img/12.png'
import i13 from '../../Assests/Img/13.png'

function Section() {
  return (
    <div className="section">
      <div className="container">
        <div className="section-title">
            <img src={i2} alt="" className="section-picture" />
            <img src={i1} alt="" className="section-picture" />
            <img src={i3} alt="" className="section-picture" />
            <img src={i4} alt="" className="section-picture" />
            <img src={i5} alt="" className="section-picture" />
            <img src={i6} alt="" className="section-picture" />
        </div>
        <h2 className="section-name">
          Типография в Москве - вся полиграфия и оперативная печать
        </h2>
        <div className="section-list">
          <Fade bottom>
            <div className="section-item">
              <img src={baner} alt="" className="section-image" />
              <h3 className="section-subname">
                ПЛОТНЫЕ ВИЗИТКИ / ВИЗИТНЫЕ КАРТОЧКИ
              </h3>
            </div>
            <div className="section-item">
              <img src={kitob} alt="" className="section-imgs" />
              <h3 className="section-subname">РАСПЕЧАТКА ПРЕЗЕНТАЦИЙ</h3>
            </div>
            <div className="section-item">
              <img src={karta} alt="" className="section-imgs" />
              <h3 className="section-subname">ОТКРЫТКИ, ПРИГЛАШЕНИЯ</h3>
            </div>
          </Fade>
          <Fade bottom>
            <div className="section-item">
              <img src={albom} alt="" className="section-pic" />
              <h3 className="section-subname">ИНТЕРЬЕРНАЯ ПЕЧАТЬ 1 ДЕНЬ</h3>
            </div>
            <div className="section-item">
              <img src={viza} alt="" className="section-pic" />
              <h3 className="section-subname">СРОЧНАЯ ПЕЧАТЬ ФЛАЕРОВ</h3>
            </div>
            <div className="section-item">
              <img src={tel} alt="" className="section-pics" />
              <h3 className="section-subname">
                ПЕЧАТЬ НАКЛЕЕК НА БУМАГЕ И ПЛЕНКЕ / С ВЫРУБКОЙ И БЕЗ
              </h3>
            </div>
          </Fade>
        </div>
        <ul className="section-lists">
            <li className="section-items">
                <img src={i10} alt="" className="section-images" />
                <p className="section-subtext">Наличный и безналичный расчет по карте</p>
            </li>
            <li className="section-items">
                <img src={i11} alt="" className="section-images" />
                <p className="section-subtext">Наличный и безналичный расчет по карте</p>
            </li>
            <li className="section-items">
                <img src={i12} alt="" className="section-images" />
                <p className="section-subtext">Наличный и безналичный расчет по карте</p>
            </li>
            <li className="section-items">
                <img src={i13} alt="" className="section-images" />
                <p className="section-subtext">Наличный и безналичный расчет по карте</p>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Section;
