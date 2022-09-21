import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import digital from "../../Assests/Img/prints.png";
import "./Header.css";


export const Header = () => {
  return (
    <nav>
      <div className="container">
        <ul className="header__list">
          <li className="header__item">
            <Link className="header-link" to="/">
              <img src={digital} alt="" className="header-img" />
            </Link>
          </li>
          <li className="header__item">
            <NavLink to="/" >Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink>About Us</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Blog</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Company</NavLink>
          </li>
          <li className="header__item">
            <NavLink>News</NavLink>
          </li>
          <li className="header__item">
            <NavLink>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
