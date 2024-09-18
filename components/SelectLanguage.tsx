
"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/utils/utility";
import OutsideClickHandler from "react-outside-click-handler";
interface SelectLanguageProps {
  language: string;
  setLanguage: (language: string) => void;
  seActiveIcon: (icon: string) => void;
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({
  language,
  setLanguage,
  seActiveIcon,
}) => {
  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    const newActiveIcon = languages.find(
      (lang) => lang.name === newLanguage
    )?.icon;

    if (newActiveIcon) {
      seActiveIcon(newActiveIcon);
    }
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setShowDropdown(false)}>
      <div onClick={toggleDropdown} className="flex flex-col justify-center  w-full">
        <p className="py-[10px] text-sm font-medium">Language</p>
        <div className="flex rounded justify-between w-full dropdown-title capitalize w-[120px]  p-2 px-4 text transition-all duration-300 ease-in-out">
          {language}
          <ChevronDown />
        </div>

        {showDropdown && (
          <div className="dropdown-menu w-[120px] top-[94px]">
            {languages.map((lang, i) => (
              <div key={i}>
                <button
                  className="dropdown-item text-left hover:text-slate-50 transition-all duration-300 ease-in-out text-white"
                  onClick={() => handleLanguageChange(lang.name)}
                >
                  {lang.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default SelectLanguage;