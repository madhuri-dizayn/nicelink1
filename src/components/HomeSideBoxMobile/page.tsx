import React from "react";
import Image from "next/image";
// import sofa from "../../assets/sofa.png";
import sofa from "../../app/assets/sofa.png";

const HomeSideBoxMobile = () => {
  return (
    <div className="w-[290px] h-[276px] px-8 pt-4 pb-4 bg-orange-50">
      <p className="text-[#545450] text-sm font-bold mb-6 uppercase flex justify-center items-center">
        Explore Latest
      </p>
      <div>
        <Image src={sofa} alt="sofa" width={162} height={156} />
      </div>

      <p className="text-[#545450] text-sm font-bold mt-4 uppercase flex justify-center items-center">
        View all
      </p>
    </div>
  );
};

export default HomeSideBoxMobile;
