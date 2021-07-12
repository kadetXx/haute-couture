import "./Featured.scss";

import TitleBlock from "../titleBlock/TitleBlock";

import FeaturedOne from "../../assets/images/featured-one.png";
import FeaturedTwo from "../../assets/images/featured-two.png";
import FeaturedThree from "../../assets/images/featured-three.png";
import FeaturedFour from "../../assets/images/featured-four.png";

interface FeaturedItem {
  name: string;
  image: string;
}

const Featured = () => {
  const ladiesWear: FeaturedItem[] = [
    {
      name: "Lucid Dreams",
      image: FeaturedOne,
    },
    {
      name: "Magnificient",
      image: FeaturedTwo,
    },
    {
      name: "Stepper Girl",
      image: FeaturedThree,
    },
    {
      name: "Gram Attire",
      image: FeaturedFour,
    },
  ];

  return (
    <div className="featured">
      <TitleBlock subtitle="Featured" title="Ladies Summer Collection" />
      <div className="featured__grid">
        {ladiesWear.map((item, index) => (
          <div
            key={item.name + index}
            className="featured__item featured__item--one"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <p className="featured__item-label">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="featured__cta">
        <div className="btn">View All</div>
      </div>
    </div>
  );
};

export default Featured;
