import React from "react";
import "./Navbar.css";
import logo from "../../assets/svg/logo.svg";
import circleArrowRight from "../../assets/svg/right-circle.svg";
import arrowRight from "../../assets/svg/right-arrow.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_inner">
          <a href="#">
            <img src={logo} alt="" />
          </a>
          <ul className="menu">
            <li>
              <a href="#">Kurslar</a>
            </li>
            <li>
              <a href="#">Natijalar</a>
            </li>
            <li>
              <a href="#">Online darslar</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
          <div className="button_group">
            <button className="registr-btn">Ro’yxatdan o’tish</button>

            <button className="login-btn">
              Kirish <img src={circleArrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
