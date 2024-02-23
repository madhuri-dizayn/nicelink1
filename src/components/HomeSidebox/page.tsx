import React from "react";
import Image from "next/image";
import sofa from "../../app/assets/sofa.png";
import sofa1 from "../../app/assets/sofa1.png";
import sofa2 from "../../app/assets/sofa2.png";

const images = [sofa, sofa1, sofa2];

const HomeSideBox = () => {
  return (
    <div className="w-[598px] h-[235px] pl-9 pb-7 pt-4 pr-12 flex flex-col justify-between rounded-lg border border-white bg-orange-50">
      <div className="flex w-full justify-between">
        <p className="text-[#545450] text-sm font-bold uppercase">
          Explore Latest
        </p>
        <p className="text-[#545450] text-sm font-semibold uppercase">
          View all
        </p>
      </div>

      <div className="flex gap-3 mt-3">
        {images.map((image, index) => (
          <div key={index} className="relative w-1/3 h-full">
            <Image
              src={image}
              alt={`sofa-${index}`}
              width={162}
              height={156}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSideBox;
