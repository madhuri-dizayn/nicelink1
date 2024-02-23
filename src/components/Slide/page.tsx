import React from "react";

const Slide = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col pt-[163px] pr-[9.93vw] pl-[154px] pb-[9.86vw] md:px-[24px]">
      <h1 className="text-[#000] text-3xl font-semibold uppercase mb-5 md:mt-44 md:text-[#2D2D2D] md:text-2xl md:w-[334px]">
        Design & Innovation
      </h1>

      <div className="  md:w-full max-w-[800px] w-[53.10vw] ">
        <p className="text-[#535353] text-base font-normal mb-3 md:text-[#7B7B7B]">
          At Nice Link, we seamlessly blend artistic vision with cutting-edge
          technology to create furniture that not only mesmerizes with its
          aesthetics but also enhances your everyday life. Experience the
          transformative power of design and innovation as we redefine luxury in
          every exquisite detail.
        </p>

        <div className="w-full flex justify-center md:mt-11">
          <button className="w-[213px] h-10 border border-[#b89774] justify-center items-center text-sm font-semibold">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;