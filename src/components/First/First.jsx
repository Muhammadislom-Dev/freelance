import React from "react";
import Pen from "../../Assests/Img/pen.jpg";
import Notebook from "../../Assests/Img/notebook.jpg";
import Mirror from "../../Assests/Img/mirror.jpg";
import Notebook2 from "../../Assests/Img/notebook2.jpg";
import Headphone from "../../Assests/Img/headphone.jpg";
import "./First.scss";
import Fade from "react-reveal/Fade";

const First = () => {
  return (
    <div className="first">
      <Fade left cascade>
        <div className="container">
          <h2 className="first-name">Бизнес-сувениры с нанесением логотипа и другой персонализацией</h2>
          <div className="card">
            <div className="left">
              <img src={Pen} alt="" />
              <p>Ручки</p>
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
              <p>Электроника</p>
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
              <p>Промо-сувениры</p>
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
              <p>Корпоративные подарки</p>
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
              <p>Промо-одежда</p>
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
              <p>Ежедневники</p>
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
