import React from "react";
import Chair from "../../app/assets/Chair.png";
import Image from "next/image";

const ViewSlide = () => {
  return (
    <div className="w-full h-[fit-content]">
      <div className="flex w-full justify-between px-[11.38%] mt-[131px] mb-[-35px] md:w-full md:px-6 md:flex md:flex-col-reverse md:mt-44">
        <div className="mb-[2vh] pt-[6vh] w-[50%] flex flex-col md:w-full md:mt-11 md:flex md:flex-col">
          <p className="text-[#000] text-5xl font-normal mb-2 md:mb-4 md:text-[#2d2d2d] md:text-2xl md:font-bold">
            View Our New 2023
          </p>
          <p className="text-[#000] text-4xl font-normal">Spring Collection</p>

          <p className="mt-4 text-[#2e2928] w-full max-w-[361px] text-base font-normal md:w-full md:mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </p>

          <div className="w-[200px] bg-[#b89774] flex items-center pl-[15px] pr-[17px] gap-5 mt-6 h-12 md:w-full">
            <button className="text-white text-sm font-semibold">
              {" "}
              View All Products{" "}
            </button>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M16.1657 10L11.1657 5M16.1657 10L11.1657 15M16.1657 10H4.49902"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>

        <div className=" relative z-5 bg-[#E2E2E2] w-[41vw] h-[fit-content] mt-[8vh] md:w-full">
          <Image
            src={Chair}
            alt="chair"
            objectFit="cover"
            className="pt-28 flex items-center justify-center w-[100%] h-[auto] object-contain md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ViewSlide;
