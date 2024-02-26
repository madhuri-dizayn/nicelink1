"use client";
import React, { useState } from "react";
import Image from "next/image";
import Accordion from "../Accrodian/page";
import Retailers from "../../app/assets/Retailers.png"; // Path:

const data = [
  {
    title: "Exceptional Design and Craftsmanship",
    description:
      "Our meticulously crafted pieces showcase unparalleled artistry, attention to detail, and timeless elegance, providing retailers with a unique selling proposition that captivates discerning customers.",
  },
  {
    title: "Customization and Flexibility",
    description:
      "Another description for the accordion item. You can add more items to the dummyData array as needed.",
  },
  {
    title: "Reliable Partnership",
    description:
      "Another description for the accordion item. You can add more items to the dummyData array as needed.",
  },
];

const RetailersSlide = () => {
  const [selected, setSelected] = useState(0);
  // const [visible, setVisible] = useState(false);

  const handleClick = (index: number) => {
    setSelected(index);

    // setVisible(true);
  };

  return (
    <section className="mt-40 bg-[#222] pt-[75px] pb-[372px] md:pb-[30px]">
      <div className="container flex overflow-hidden gap-x-24 gap-y-11 flex-wrap">
        <div className="w-[475px] relative">
          <Image src={Retailers} alt="Retailers" width={475} height={482} />
        </div>
        <div className="flex flex-col flex-1 w-full">
          {/* <div className="w-full ml-3 flex items-center">
            <p className="text-white flex gap-3 items-center">
              -
              <span className="text-white text-5xl font-normal">
                Why Retailers
              </span>
            </p>
          </div>
          <p className="text-white text-5xl font-normal">Choose Us?</p> */}

          <h5 className="text-5xl flex items-center gap-2 flex-wrap text-white relative before:content-normal before:relative before:inline-block before:left-0 before:w-[32px] md:before:hidden before:h-[6px] before:bg-white">
            Why Retailers <span className="block">Choose Us?</span>
          </h5>

          <div className="mt-11">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="42"
                viewBox="0 0 47 42"
                fill="none"
              >
                <path
                  d="M18.8072 42V21.8505H10.0714C10.0714 18.623 10.6891 15.919 11.9245 13.7383C13.1598 11.4704 15.4541 9.76947 18.8072 8.63552V0C16.0718 0.34891 13.5128 1.17757 11.1303 2.48598C8.83606 3.70717 6.85066 5.27726 5.17409 7.19626C3.49752 9.11526 2.17392 11.3396 1.20328 13.8692C0.320874 16.3988 -0.0762074 19.1028 0.0120327 21.9813V42H18.8072ZM47 42V21.8505H38.2642C38.2642 18.623 38.8819 15.919 40.1173 13.7383C41.3526 11.4704 43.6469 9.76947 47 8.63552V0C44.2646 0.34891 41.7056 1.17757 39.3231 2.48598C37.0288 3.70717 35.0434 5.27726 33.3669 7.19626C31.6903 9.11526 30.3667 11.3396 29.3961 13.8692C28.5137 16.3988 28.1166 19.1028 28.2048 21.9813V42H47Z"
                  fill="#3E3E3E"
                />
              </svg>
            </p>
          </div>

          {data.map((item, index) => (
            <div key={index} className="mt-5">
              <Accordion
                // visible={visible}
                title={item.title}
                description={item.description}
                selected={selected === index ? true : false}
                handleChange={() => handleClick(index)}
              />
            </div>
          ))}

          <div className="flex gap-6 md:hidden">
            <div className="w-[200px] bg-[#b89774] flex items-center pl-[35px] pr-[17px] gap-5 mt-6 h-12 md:w-full">
              <button className="text-white text-sm font-semibold">
                Explore Style
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

            <div className="w-[200px] bg-[#4F4F4F] flex items-center pl-[35px] pr-[17px] gap-5 mt-6 h-12 md:w-full">
              <button className="text-white text-sm font-semibold">
                Furniture
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
        </div>
      </div>
    </section>
  );
};

export default RetailersSlide;
