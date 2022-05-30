import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
import Arrows from "./Arrows";
import SliderContent from "./SliderContent";
import sliderImage from "./sliderImage";

const len = sliderImage.length - 1;
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      <Header />
      <div className="home">
        <div className="home__container">
          <div className="slider-container">
            <SliderContent
              activeIndex={activeIndex}
              sliderImage={sliderImage}
            />
            <Arrows
              prevSlide={() =>
                setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
              }
              nextSlide={() =>
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
              }
            />
          </div>
          <div className="home__row">
            <Product
              id="1"
              title="Samsung Galaxy M53 5G (Mystique Green, 8GB, 128GB Storage)"
              price={28499}
              image="https://m.media-amazon.com/images/I/71MaDLgHnxL._SX679_.jpg"
              rating={5}
            />

            <Product
              id="2"
              title="Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video"
              price={2499}
              image="https://images-eu.ssl-images-amazon.com/images/I/31DsVbwcK6S._AC_SR400,600_.jpg"
              rating={2}
            />
            <Product
              id="9"
              title="Sports and Protein supplements"
              price={4499}
              image="https://m.media-amazon.com/images/I/51huVCoeBNL.jpg"
              rating={5}
            />

            <Product
              id="10"
              title="HP Victus Latest AMD Ryzen 5 5600H Processor"
              price={54999}
              image="https://images-eu.ssl-images-amazon.com/images/I/31PHkNlAXRS._SY300_SX300_QL70_FMwebp_.jpg"
              rating={2}
            />
          </div>
          <div className="home__row">
            <Product
              id="3"
              title="Intern INT-38C Acoustic Guitar Kit, With Bag, Strings, Pick And Strap, Red"
              price={2840}
              image="https://m.media-amazon.com/images/I/81C3A85xSvL._SY450_.jpg"
            />
            <Product
              id="4"
              title="GoPro HERO10 Black Action Camera with Free 3-Way Grip Tripod 1.0"
              price={15999}
              image="https://m.media-amazon.com/images/I/51WLTziEOvL._SY450_.jpg"
              rating={5}
            />{" "}
            <Product
              id="5"
              title="Yashika Women Art silk Sarees SDPL-METRO"
              price={899}
              image="https://m.media-amazon.com/images/I/91ZXr8iTpaL._UY741_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="6"
              title="OnePlus 108 cm (43 inches) Y Series Full HD LED Smart Android TV 43Y1 (Black) (2020 Model)"
              price={28599}
              image="https://m.media-amazon.com/images/I/71vZLIfj5yS._AC_SX480_SY360_.jpg"
              rating={4}
            />
            <Product
              id="7"
              title="eAirtec 102 cms (40 inches) HD Ready Smart LED TV 40DJSM (Black) (2020 Model)"
              price={14999}
              image="https://m.media-amazon.com/images/I/71Sdj04A8dS._AC_SX480_SY360_.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
