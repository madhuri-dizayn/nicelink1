import React from "react";
// import Products from "../../assets/Products.png";
import Products from "../../app/assets/Products.png";
import Image from "next/image";

const ProductSlide = () => {
  return (
    <div className="w-full md:mt-[190px]">
      <Image src={Products} alt="Products" className="w-full" />
    </div>
  );
};

export default ProductSlide;
