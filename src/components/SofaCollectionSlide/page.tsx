"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RedSofa from "../../app/assets/RedSofa.png";
import BrownSofa from "../../app/assets/BrownSofa.png";
import OrangeSofa from "../../app/assets/OrangeSofa.png";

import SofaCollectionCard from "../SofaCollectionCard/page";
import SofaCollectionCardMobile from "../SofaCollectionCardMobile/page";

const SofaSlide = () => {
  const images = [RedSofa, BrownSofa, OrangeSofa];

  const settings = {
    dots: false,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    adaptiveWidth: true,
    slideMargin: 80,
  };

  return (
    <>
      <div className="mt-[10vh] w-full pl-[19.71%] md:hidden">
        <div className="flex justify-between items-center pl-0 pr-[8.6%] mb-[17px]">
          <p className="text-[#2e2928] text-base font-normal">
            Spring 2023 Sofa Collection
          </p>
          <div className="flex justify-center items-center cursor-pointer">
            <button className="w-[85px] text-[#cbaa6a] text-base font-semibold">
              Explore
            </button>
            <p className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
              >
                <path
                  d="M8.78377 11.2581L12.9393 7.22743L1.25 7.22743C0.83579 7.22743 0.5 6.90174 0.5 6.49997C0.5 6.09819 0.835789 5.7725 1.25 5.7725L12.9393 5.7725L8.78377 1.74184C8.4909 1.45776 8.4909 0.997132 8.78377 0.713057C9.07665 0.428981 9.55155 0.428981 9.84442 0.713057L15.2803 5.98557C15.5732 6.26965 15.5732 6.73028 15.2803 7.01435L9.84442 12.2869C9.6975 12.4295 9.50475 12.5005 9.31215 12.5C9.26482 12.4999 9.2175 12.4954 9.17085 12.4867C9.02903 12.46 8.89365 12.3935 8.78377 12.2869C8.4909 12.0028 8.4909 11.5422 8.78377 11.2581Z"
                  fill="#CBAA6A"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className="relative cursor-pointer">
          <Slider {...settings}>
            {images.map((image, index) => (
              <SofaCollectionCard
                key={index}
                image={{
                  src: image.src,
                  alt: `Slide ${index}`,
                }}
                title="Red Sofa"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                width={691}
                height={518}
              />
            ))}
          </Slider>
        </div>
      </div>

      <div className="hidden md:block md:mt-[132px]">
        <SofaCollectionCardMobile />
      </div>
    </>
  );
};

export default SofaSlide;
