"use client"
import Image from "next/image";
import Canvas from '../components/Canvas';
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types";
import { useState } from "react";
import SelectLanguage from "@/components/SelectLanguage";
import { languages } from "@/utils/utility";
export default function Home() {
const [language , setlanguage] = useState(languages[0].name);

  return (
    <main className="flex w-full ">
      <div className="w-[22%] bg-[#191919] text-white">
         <SelectLanguage />
      </div>
    <div className="w-[78%] ">
      <Canvas  language={language}/> 
    </div>
    </main>
   
  );
}
