import React from "react";
// import Homeimage3 from "../../assets/Homeimage3.png";
import Homeimage3 from "../../app/assets/Homeimage3.png";
import Image from "next/image";
import HomeSideBox from "../HomeSidebox/page";
import HomeSideBoxMobile from "../HomeSideBoxMobile/page";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen z-[8] relative">
        <Image
          src={Homeimage3}
          alt="homeimage"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute z-10 pl-[130px] pt-[300px] flex flex-col justify-between w-full md:pt-28 md:pl-5">
          <p className="text-white text-[100px] font-bold text-shadow-lg text-capitalize md:text-[67px]">
            Nice Link
          </p>
          <p className="text-white text-[55px] font-semibold text-capitalize md:text-[37px]">
            Home Furnishing
          </p>

          <div className="mt-[204px] flex items-center gap-6 md:mt-[350px] md:hidden">
            <p className="text-white text-[72px] font-light text-shadow-lg text-capitalize">
              Latest Designs
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="59"
                height="59"
                viewBox="0 0 59 59"
                fill="none"
              >
                <g opacity="0.3" filter="url(#filter0_b_1664_9052)">
                  <circle cx="29.5" cy="29.5" r="29.5" fill="black" />
                  <circle cx="29.5" cy="29.5" r="29" stroke="#BCBCBC" />
                </g>
                <path
                  d="M37.913 21.887C37.913 21.4452 37.5548 21.087 37.113 21.087L29.913 21.087C29.4711 21.087 29.113 21.4452 29.113 21.887C29.113 22.3289 29.4711 22.687 29.913 22.687L36.313 22.687L36.313 29.087C36.313 29.5289 36.6711 29.887 37.113 29.887C37.5548 29.887 37.913 29.5289 37.913 29.087L37.913 21.887ZM21.5012 38.6301L37.6787 22.4527L36.5473 21.3213L20.3699 37.4988L21.5012 38.6301Z"
                  fill="#F2F2F2"
                />
                <defs>
                  <filter
                    id="filter0_b_1664_9052"
                    x="-4"
                    y="-4"
                    width="67"
                    height="67"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_1664_9052"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_1664_9052"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute right-0 z-30 bottom-[-63px] md:hidden">
          <HomeSideBox />
        </div>
        <div className="hidden absolute top-[90%] left-[20%] z-50 md:block">
          <HomeSideBoxMobile />
        </div>
      </div>
    </>
  );
};

export default HomePage;
