"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { backgrounds } from "@/utils/utility";
import OutsideClickHandler from "react-outside-click-handler";

interface SelectBackgroundProps {
  background: string;
  setBackground: (background: string) => void;
}

function SelectBackground({
  background,
  setBackground,
}: SelectBackgroundProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleBackgroundChange = (newBackground: string) => {
    setBackground(newBackground);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="bg-selector relative" onClick={toggleDropdown}>
        <p className="py-[10px] text-sm font-medium">Theme Selector</p>
        <div className="dropdown-title w-[62px]">
          <div
            className="rounded-full w-[20px] h-[20px]"
            style={{
              background: background,
            }}
          ></div>
          <ChevronDown />
        </div>
        {showDropdown && (
          <div className="dropdown-menu top-[74px] w-full rounded-full flex flex-wrap h-full gap-1">
            {backgrounds.map((bg, i) => {
              return (
                <div
                  key={i}
                  onClick={() => handleBackgroundChange(bg)}
                  className="w-[20px] h-[20px] rounded-full"
                  style={{ background: bg }}
                ></div>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default SelectBackground;