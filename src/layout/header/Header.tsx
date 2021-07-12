import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header>
      <div className="logo">Haute Couture</div>

      <nav>
        <ul className={showMenu ? "menu" : "menu menu--hidden"}>
          <li className="menu__item">
            <a href="#" className="menu__link">
              TW.
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              GH.
            </a>
          </li>
        </ul>

        <button className={showMenu ? "hamburger hamburger--expanded" : "hamburger"} onClick={() => setShowMenu(!showMenu)}>
          <span className="hamburger__bar"></span>
          <span className="hamburger__bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
