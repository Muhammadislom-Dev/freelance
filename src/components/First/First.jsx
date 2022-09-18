import React from "react";
import Pen from "../../Assests/Img/pen.jpg";
import Notebook from "../../Assests/Img/notebook.jpg";
import Mirror from "../../Assests/Img/mirror.jpg";
import Notebook2 from "../../Assests/Img/notebook2.jpg";
import Headphone from "../../Assests/Img/headphone.jpg";
import "./First.scss";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="first">
      <Fade left cascade>
        <div className="container">
          <h2 className="first-name">Бизнес-сувениры с нанесением логотипа и другой персонализацией</h2>
          <div className="card">
            <div className="left">
              <img src={Pen} alt="" />
              <Link to="/product" className="product-link">Ручки</Link>
            </div>
            <div className="right">
              <ul>
                <li>Деревянные ручки</li>
                <li>Карандаши</li>
                <li>Металлические ручки</li>
                <li>Наборы с ручками</li>
                <li className="hid">Пластиковые ручки</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Футляры для ручек</li>
                <li className="dot">...</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={Headphone} alt="" />
              <Link to="/product" className="product-link">Электроника</Link>
            </div>
            <div className="right">
              <ul>
                <li>Бытовая техника</li>
                <li>Внешние аккумуляторы</li>
                <li>Внешние жесткие диски</li>
                <li className="dot">...</li>
                <li className="hid">Пластиковые ручки</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Футляры для ручек</li>
                <li className="hid">Детская одежда</li>
                <li className="hid">Текстовыделители</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={Mirror} alt="" />
              <Link to="/product" className="product-link">Промо-сувениры</Link>
            </div>
            <div className="right">
              <ul>
                <li>Антистрессы</li>
                <li>Брелки</li>
                <li>Зажигалки</li>
                <li className="hid">Пластиковые ручки</li>

                <li className="dot">...</li>
                <li className="hid">Пластиковые ручки</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Детская одежда</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Футляры для ручек</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="left">
              <img src={Notebook} alt="" />
              <Link to="/product" className="product-link">Корпоративные подарки</Link>
            </div>
            <div className="right">
              <ul>
                <li>Дорожные органайзеры</li>
                <li>Карандаши</li>
                <li>Зажимы для купюр</li>
                <li className="hid">Пластиковые ручки</li>

                <li className="dot">...</li>
                <li className="hid">Пластиковые ручки</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Детская одежда</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Футляры для ручек</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img src={Mirror} alt="" />
              <Link to="/product" className="product-link" >Промо-одежда</Link>
            </div>
            <div className="right">
              <ul>
                <li>Аксессуары</li>
                <li>Брюки и шорты</li>
                <li>Ветровки, куртки, жилеты</li>
                <li className="hid">Пластиковые ручки</li>

                <li className="dot">...</li>
                <li className="hid">Детская одежда</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Детская одежда</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Футляры для ручек</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="left">
              <img src={Notebook2} alt="" />
              <Link  to="/product" className="product-link">Ежедневники</Link>
            </div>
            <div className="right">
              <ul>
                <li>Дорожные органайзеры</li>
                <li>Карандаши</li>
                <li>Зажимы для купюр</li>
                <li className="hid">Пластиковые ручки</li>

                <li className="dot">...</li>
                <li className="hid">Пластиковые ручки</li>
                <li className="hid">Текстовыделители</li>
                <li className="hid">Футляры для ручек</li>
                <li className="hid">Футляры для ручек</li>
                <li className="hid">Футляры для ручек</li>
              </ul>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default First;
