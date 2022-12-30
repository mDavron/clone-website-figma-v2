import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/images/hero.jpg";
import rightArrow from "../../assets/svg/right-arrow.svg";

const HeroSection = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="left_content">
            <h2>Moliya Studiyasi — </h2>
            <h3>Buxgalteriya Maktabi</h3>
            <p>
              Malakali ustozlardan dars oling. Imtihonlarni muvaffaqiyatli
              topshiring-u,
              <strong>ish o'rniga ega bo'ling!</strong>
            </p>
            <button className="join-course">
              Kursga yozilish <img src={rightArrow} alt="" />
            </button>
          </div>
          <div className="right_imgBox">
            <img src={heroImg} alt="heroImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
