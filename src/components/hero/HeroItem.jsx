import React from "react";
import "./HeroItem.css";
import bag from "../../assets/svg/bag.svg";
import one1c from "../../assets/svg/one-c.svg";
import diplom from "../../assets/svg/diplom.svg";

const HeroItem = () => {
  return (
    <div className="hero_descr">
      <div className="descr-item">
        <div className="bgImage">
          <img src={bag} alt="bag" />
        </div>
        <p>Ish bilan taʼminlaymiz!</p>
      </div>
      <div className="descr-item">
        <div className="bgImage">
          <img src={one1c} alt="one-c" />
        </div>
        <p>4 oy davomida Buxgalteriya va 1C dasturi</p>
      </div>
      <div className="descr-item">
        <div className="bgImage">
          <img src={diplom} alt="diplom" />
        </div>
        <p>O’qish yakunida diplom va sertifikat beriladi</p>
      </div>
    </div>
  );
};

export default HeroItem;
