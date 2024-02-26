"use client";

import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import MobileNav from "../MobileNav/page";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="cursor-pointer w-full flex justify-between items-center px-[8.3vw] fixed top-0 left-0 z-[15] h-24 backdrop-filter backdrop-blur-sm border-opacity-14 bg-[rgba(0,0,0,0.01)]">
      <div>
        <h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M41.2476 0H0V11.6791H6.02118L19.4275 32.0796L19.5035 32.1964H20.8786V10.0946H18.5065V26.3383L7.36663 9.38296L7.29065 9.2662H2.37215V2.40921H38.8754V24.3924H41.2476V0ZM26.001 9.8055H23.6288V32.0778H38.8754V39.5778H2.37215V17.3371H0V42H41.2476V29.6537H26.001V9.80364V9.8055ZM8.05975 22.6281H5.27988V32.9506H8.05975V22.6281Z"
              fill="white"
            />
          </svg>
        </h1>
      </div>

      <div className="w-[38.09vw] flex justify-between md:hidden">
        {["About", "Collections", "Textiles", "Design & Innovation"].map(
          (text, index) => (
            <h1
              key={index}
              className="text-sm font-semibold text-[#FFF] uppercase hover:underline"
            >
              {text}
            </h1>
          )
        )}
      </div>

      <div className="w-[150px] h-12 bg-[#b89774] flex items-center pl-[35px] pr-[17px] gap-5 md:hidden">
        <button className="text-white text-sm font-semibold">Contact </button>
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

      <div className="md:flex items-center hidden">
        {isOpen && <MobileNav handleClick={handleClick} />}
        <div className="cursor-pointer">
          <Hamburger onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
