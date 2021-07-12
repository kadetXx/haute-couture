import { useState, useEffect } from "react";
import "./Banner.scss";

import Popup from '../popup/Popup'

const Banner = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  }

  useEffect(() => {
    const body = document.body

    if (showPopup) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'auto'
    }
  }, [showPopup])

  return (
    <div className="banner">
      <h2 className="banner__title">FASHION REDEFINED.</h2>
      <h3 className="banner__subtitle">
        ROCK YOUR STYLE, <br /> BEING BORING ISN’T <br /> ALLOWED HERE
      </h3>
      <div className="banner__cta">
        <button className="btn" onClick={togglePopup}>We're Hiring!</button>
      </div>

      {showPopup && (
        <Popup action={() => setShowPopup(false)} />
      )}
    </div>
  );
};

export default Banner;
