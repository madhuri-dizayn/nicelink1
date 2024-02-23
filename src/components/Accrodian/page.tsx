import React from "react";

interface AccordionProps {
  handleChange: () => void;
  selected?: boolean;
  title: string;
  description: string;
  visible?: boolean;
}

const Accordion = ({
  handleChange,
  selected,
  title,
  description,
}: AccordionProps) => {
  return (
    <div
      className={`flex flex-col cursor-pointer bg-[#1d1d1d] pt-4 mb-3 overflow-hidden ${
        selected ? "selected-style" : "mb-3 bg-[unset]"
      }`}
      onClick={handleChange}
    >
      <div className="w-full flex flex-col pl-4">
        <div className="w-full flex pr-3 justify-between mb-3 items-center">
          <p className="text-white text-base font-semibold">{title}</p>

          <div className="h-[fit-content] w-[fit-content] transition-duration-300 transition-all duration-300 ease-out">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M12 6.00003L10.6 7.40003L6 2.80002L1.4 7.40002L1.83588e-07 6.00002L6 2.55823e-05L12 6.00003Z"
                  fill="#7B7B7B"
                />
              </svg>
            </p>
          </div>
        </div>

        {selected && (
          <p className="w-full mb-9 pr-5 text-[#909090] text-base font-normal">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
