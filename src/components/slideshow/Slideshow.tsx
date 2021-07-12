import "./Slideshow.scss";

import TitleBlock from "../titleBlock/TitleBlock";

import SlideOne from "../../assets/images/slide-one.png";
import SlideTwo from "../../assets/images/slide-two.png";
import SlideThree from "../../assets/images/slide-three.png";
import SlideFour from "../../assets/images/slide-four.png";
import SlideFive from "../../assets/images/slide-five.png";
import SlideSix from "../../assets/images/slide-six.png";
import SlideSeven from "../../assets/images/slide-seven.png";

interface Slide {
  name: string;
  image: string;
}

const Slideshow = () => {
  const mensWear: Slide[] = [
    {
      name: "Dagbana",
      image: SlideOne,
    },
    {
      name: "English",
      image: SlideTwo,
    },
    {
      name: "Hoodie",
      image: SlideThree,
    },
    {
      name: "Lost Boys",
      image: SlideFour,
    },
    {
      name: "Classic",
      image: SlideFive,
    },
    {
      name: "Retro",
      image: SlideSix,
    },
    {
      name: "Beach",
      image: SlideSeven,
    },
  ];

  return (
    <div className="slideshow">
      <TitleBlock subtitle="Featured" title="Men Summer Collection" />
      <div className="slideshow__slider">
        {mensWear.map((item, index) => (
          <div
            key={item.name + index}
            className="slideshow__item"
            style={{ backgroundImage: `url('${item.image}')` }}
          >
            <p className="slideshow__item-label">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="slideshow__cta">
        <div className="btn">
          View All
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
