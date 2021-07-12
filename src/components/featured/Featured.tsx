import React from "react";
import "./Featured.scss";

import TitleBlock from "../titleBlock/TitleBlock";

const Featured = () => {
  return (
    <div className="featured">
      <TitleBlock subtitle="Featured" title="Ladies Summer Collection" />
      <div className="featured__grid">
        <div className="featured__item featured__item--one">
          <p className="featured__item-label">Lucid Dreams</p>
        </div>
        <div className="featured__item featured__item--two">
          <p className="featured__item-label">Ocean eyes</p>
        </div>
        <div className="featured__item featured__item--three">
          <p className="featured__item-label">Lucid dreams</p>
        </div>
        <div className="featured__item featured__item--four">
          <p className="featured__item-label">Ocean eyes</p>
        </div>
      </div>
      <div className="featured__cta">
        <div className="btn">
          View All
        </div>
      </div>
    </div>
  );
};

export default Featured;
