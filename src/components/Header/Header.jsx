import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <nav>
      <div className="container">
        <ul className="header__list">
          <li className="header__item">
            <NavLink to="/">Вся продукция</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Открытки</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Наклейки</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Визитки</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Бирки</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Календари 2023</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Интерьер</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Портфолио</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
