import React from "react";
import Image from "next/image";

interface SofaCollectionCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  desc: string;
  width: number;
  height: number;
}

const SofaCollectionCard = ({
  image,
  title,
  desc,
  width,
  height,
}: SofaCollectionCardProps) => {
  return (
    <div className="w-full h-[fit-content]">
      <div className="relative max-w-[691px] w-[47.96vw] h-[fit-content] mb-4 overflow-hidden gap-4">
        <div className="mb-7 w-[90%] h-[fit-content] absolute bottom-0 left-10 flex justify-between items-center z-10">
          <p className="text-white text-5xl font-normal">{title}</p>
          <p className="flex items-center cursor-pointer"></p>
        </div>

        <Image src={image.src} width={width} height={height} alt={image.alt} />
      </div>
      <p className="text-[#2e2928] text-sm font-normal">{desc}</p>
    </div>
  );
};

export default SofaCollectionCard;
