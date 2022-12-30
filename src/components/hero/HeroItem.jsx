import React from "react";
import "./HeroItem.css";
import bag from "../../assets/svg/bag.svg";
import one1c from "../../assets/svg/one-c.svg";
import diplom from "../../assets/svg/diplom.svg";

const HeroItem = () => {
  return (
    <div className="hero_descr">
      <div className="descr-item">
        <img src={bag} alt="bag" />
        <p>Ish bilan taʼminlaymiz!</p>
      </div>
      <div className="descr-item">
        <img src={one1c} alt="one-c" />
        <p>4 oy davomida Buxgalteriya va 1C dasturi</p>
      </div>
      <div className="descr-item">
        <img src={diplom} alt="diplom" />
        <p>O’qish yakunida diplom va sertifikat beriladi</p>
      </div>
    </div>
  );
};

export default HeroItem;
