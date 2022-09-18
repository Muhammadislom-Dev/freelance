import React from "react";
import "./Footer.css";
import location from "../../Assests/Img/locations.png";
import phones from "../../Assests/Img/phones.png";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-page">
          <ul className="footer-list">
            <li className="footer-item">
              <h2 className="footer-name">Услуги онлайн-типографии</h2>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Цифровая оперативная полиграфия
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Изготовление визиток срочно!
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Изготовление наклеек
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Распечатка цветных и ч.б. документов
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Интерьерная широкоформатная печать
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Специальные цены на круглые наклейки
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item">
              <h2 className="footer-name">Услуги онлайн-типографии</h2>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Цифровая оперативная полиграфия
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Изготовление визиток срочно!
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Изготовление наклеек
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Распечатка цветных и ч.б. документов
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Интерьерная широкоформатная печать
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                Специальные цены на круглые наклейки
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li className="footer-item">
              <h2 className="footer-name">Контакты онлайн-типографии №1</h2>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                <img src={location} alt="" className="footer-logo" />
                г. Москва, Тверская улица, 27, строение 1, подъезд 2
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                mail@digital-printing.ru
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link ">
                <img src={location} alt="" className="footer-logo" />
                г. Москва, ММДЦ "Москва-Сити", Пресненская наб., д. 12, "Башня
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                <img src={phones} alt="" className="footer-logo" />
                +7 (495) 356-45-96
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-link">
                <img src={phones} alt="" className="footer-logo" />
                +7 (495) 221-78-43
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
