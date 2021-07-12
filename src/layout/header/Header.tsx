import React from "react";
import './Header.scss'
const Header = () => {
  return (
    <header>
      <div className="logo">Klosette</div>

      <button className="hamburger">
        <span className="hamburger__bar"></span>
        <span className="hamburger__bar"></span>
      </button>
      {/* <nav>
        
      </nav> */}
    </header>
  );
};

export default Header;
