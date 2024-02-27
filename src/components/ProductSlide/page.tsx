import React from "react";
// import Products from "../../assets/Products.png";
import Products from "../../app/assets/Products.png";
import Image from "next/image";

const ProductSlide = () => {
  return (
    <section className="w-full h-[764px] z-[20] relative bg-orange-50 mt-14 md:h-[280px]">
      <Image
        src={Products}
        alt="products"
        layout="fill"
        objectFit="cover"
        className="w-full"
      />

      <div className=" absolute z-10  h-full w-full flex items-center justify-center">
        <div className="container flex gap-x-20 justify-center md:px-[24px] md:w-full md:gap-0">
          <div className="flex flex-col">
            <p className="text-[#FFF] text-[64px] font-bold md:text-[32px]">
              23+
            </p>
            <p className="text-[#FFF] text-sm font-normal w-[146px] md:text-[8px]">
              Years of Manufacturing Experience{" "}
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#FFF] text-[64px] font-bold md:text-[33px]">
              50+
            </p>
            <p className="text-[#FFF] text-sm font-normal w-[146px] md:text-[8px]">
              Retailers
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#FFF] text-[64px] font-bold md:text-[32px]">
              23+
            </p>
            <p className="text-[#FFF] text-sm font-normal rounded-full w-[146px] md:text-[8px] md:w-[60px] md:rounded-full">
              Years Partnered with Top 100 Retailers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlide;
