import { useState } from "react";
import { Link } from "react-router-dom";
import digital from "../../Assests/Img/prints.png";
import "./Header.css";
import Modal from "react-modal";
import light from "../../Assests/Img/light.png";
import close from '../../Assests/Img/closes.png'


const customStyles = {
  content: {
    top: "50%",
    left: "84%",
    right: "auto",
    bottom: "auto",
    height: "100vh",
    marginRight: "-100%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav>
      <div className="container">
        <ul className="header__list">
          <li className="header__items ">
            <Link className="header-link" to="/">
              <img src={digital} alt="" className="header-img" />
            </Link>
          </li>
          <li className="header__item">
            <a href="#">Home</a>
          </li>
          <li className="header__item">
            <a href="#abouts">About Us</a>
          </li>
          <li className="header__item">
            <a href="#category">Categories</a>
          </li>
          <li className="header__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="header-title">
          <input placeholder="Search..." type="text" className="header-input" />
          <a
            href="tel:+998990118934"
            target="_blank"
            className="nav__btn"
            rel="noreferrer"
          >
            <p className="nav__number">+998 78 888 09 99</p>
            <span className="nav__contact-text">Contact</span>
          </a>
        </div>
          <button onClick={openModal} className="header-btn">
            <img src={light} alt="" className="header-imgs" />
          </button>
      </div>

      <div className="header-modal">
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ul className="modal-list">
            <button onClick={closeModal} className="modal-closes">
               <img src={close} alt="" className="modal-img" />
            </button>
            <li className="modal-item">
              <a href="#" className="modal-link">
                Home
              </a>
            </li>
            <li className="modal-item">
              <a href="#abouts" className="modal-link">
                About Us
              </a>
            </li>
            <li className="modal-item">
              <a href="#category" className="modal-link">
                Categories
              </a>
            </li>
            <li className="modal-item">
              <a href="#contact" className="modal-link">
                Contact
              </a>
            </li>
            <li className="modal-item">
              <a
                href="tel:+998990118934"
                target="_blank"
                className="nav__btn modal__btn"
                rel="noreferrer"
              >
                <p className="nav__number">+998 78 888 09 99</p>
                <span className="nav__contact-text">Contact</span>
              </a>
            </li>
          </ul>
        </Modal>
      </div>
    </nav>
  );
};
