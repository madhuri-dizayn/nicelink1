"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RedSofa from "../../app/assets/RedSofa.png";
import BrownSofa from "../../app/assets/BrownSofa.png";
import OrangeSofa from "../../app/assets/OrangeSofa.png";
import Image from "next/image";

const SliderImage = () => {
  const images = [RedSofa, BrownSofa, OrangeSofa];

  const settings = {
    dots: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
  };

  return (
    <div className="max-w-[1155px] relative mt-24 cursor-pointer mx-auto px-[24px]">
      <Slider {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Slide ${index}`}
              width={1155}
              height={488}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImage;
