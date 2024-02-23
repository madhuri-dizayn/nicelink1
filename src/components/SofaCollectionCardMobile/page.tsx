import React from "react";
import Image from "next/image";
import Card from "../../app/assets/Card.png";

const SofaCollectionCardMobile = () => {
  return (
    <div className="w-[full] pl-[36px] pr-[30px]">
      <div className="flex justify-between">
        <p className="text-[#2E2928] font-normal text-base">
          Spring 2023 Sofa Collection
        </p>
        <div className="flex items-center justify-center">
          <p className="text-[#CBAA6A] text-base font-semibold">Explore</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
            >
              <path
                d="M6.40181 8.84215L9.44866 5.88682L0.878027 5.88682C0.574327 5.88682 0.328125 5.64803 0.328125 5.35344C0.328125 5.05886 0.574327 4.82006 0.878027 4.82006L9.44866 4.82006L6.40181 1.86477C6.18708 1.65648 6.18708 1.31875 6.40181 1.11046C6.61655 0.902178 6.96475 0.902178 7.17949 1.11046L11.1651 4.97629C11.3799 5.18457 11.3799 5.52231 11.1651 5.73059L7.17949 9.59646C7.07176 9.70097 6.93044 9.75304 6.78922 9.75268C6.75452 9.75259 6.71982 9.74934 6.68562 9.74292C6.58163 9.72339 6.48238 9.67457 6.40181 9.59646C6.18708 9.38816 6.18708 9.05045 6.40181 8.84215Z"
                fill="#CBAA6A"
              />
            </svg>
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <Image
          src={Card}
          alt="image"
          width={313}
          height={234}
          className="w-full"
        />
      </div>
      <p className="text-[#2E2928] text-sm font-normal mt-3">
        Made with the finest materials and built to last
      </p>
    </div>
  );
};

export default SofaCollectionCardMobile;
