import React from "react";
import "./SliderContent.css";
function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="slidersection">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
