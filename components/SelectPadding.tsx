"use client";
import React, { useState } from "react";

interface SelectPaddingProps {
  currentPadding: string;
  setCurrentPadding: (padding: string) => void;
}

function SelectPadding({ currentPadding, setCurrentPadding }: SelectPaddingProps) {
  // Handler to update padding value
  const changePadding = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Ensure the padding stays within 0 and 4rem (40px)
    if (parseFloat(value) >= 0 && parseFloat(value) <= 4) {
      setCurrentPadding(`${value}rem`);
    }
  };

  return (
    <div>
      <p className="py-[10px] text-sm font-medium">Padding (0 - 4 rem)</p>
      <div className="flex items-center gap-2 pb-2">
        <input
          type="number"
          step="0.1" // Allow decimal steps like 0.5rem
          min="0"
          max="4"
          value={parseFloat(currentPadding)} // Convert 'rem' string to a number for the input value
          onChange={changePadding}
          className="h-[37px] w-[80px] px-2 text-sm bg-gray-200 rounded-md text-black focus:outline-none"
        />
        <span className="text-sm">rem</span>
      </div>
    </div>
  );
}

export default SelectPadding;
