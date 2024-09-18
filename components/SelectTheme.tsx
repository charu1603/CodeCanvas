"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { themes } from "@/utils/utility";
import OutsideClickHandler from "react-outside-click-handler";

interface SelectThemeProps {
  theme: string;
  setTheme: (theme: string) => void;
}

function SelectTheme({ theme, setTheme }: SelectThemeProps) {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div className="theme-selector" onClick={toggleDropdown}>
        <p className="py-[10px] text-sm font-medium">Code Colors</p>
        <div className="dropdown-title py-2 capitalize w-[120px] hover:text-slate-50 transition-all duration-300 ease-in-out">
          {theme} <ChevronDown />
        </div>
        {showDropdown && (
          <div className="dropdown-menu relative  w-full flex flex-col ">
            {themes.map((theme, i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleThemeChange(theme)}
                  className=" capitalize text-left hover:text-slate-50 transition-all duration-300 ease-in-out"
                >
                  {theme}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
}

export default SelectTheme;