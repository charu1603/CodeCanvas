
"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { languages } from "@/utils/utility";

interface SelectLanguageProps {
    language: string;
    setLanguage: (language: string) => void;
    seActiveIcon: (icon: string) => void;
}
const SelectLanguage = () => {
  return (
    <div>SelectLanguage</div>
  )
}

export default SelectLanguage