"use client";
import React from "react";

interface SelectPaddingProps {
  paddings: string[];
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

function SelectPadding({
  paddings,
  currentPadding,
  setCurrentPadding,
}: SelectPaddingProps) {
  const changePadding = (newPadding: string) => {
    setCurrentPadding(newPadding);
  };

  return (
    <div>
      <p className="py-[10px] text-sm font-medium">Padding Selector</p>
      <div className="flex flex-wrap gap-2 pb-2">
        {paddings.map((padding, i) => {
          return (
            <button
              key={i}
              onClick={() => changePadding(padding)}
              className={`h-[37px]  flex flex-col justify-center text-sm px-2 cursor-pointer
                ${
                  currentPadding === padding &&
                  "bg-[#3C3C3C] text-white rounded-md"
                } hover:text-white ease-linear transition-all duration-300
              `}
            >
              {padding}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SelectPadding;