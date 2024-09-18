"use client"
import Image from "next/image";
import Canvas from '../components/Canvas';
import { useState, useRef } from "react";
import SelectLanguage from "@/components/SelectLanguage";
import SelectTheme from "@/components/SelectTheme";
import SelectBackground from "@/components/SelectBackground";
import { languages, themes, backgrounds } from "@/utils/utility";
import SelectPadding from "@/components/SelectPadding";
import html2canvas from "html2canvas";
import { Download } from "lucide-react";


export default function Home() {
const [language , setLanguage] = useState(languages[0].name);
const [theme, setTheme] = useState(themes[0]);
const [background, setBackground] = useState(backgrounds[0]);
const [activeIcon, setActiveIcon] = useState(languages[0].icon);
const [paddings, setPaddings] = useState(["1rem", "2rem", "3rem", "4rem"]);
const [currentPadding, setCurrentPadding] = useState(paddings[2]);
const editorRef = useRef(null);
const exportPng = async () => {
  const editorElem = editorRef.current;

  if (editorElem) {

    const handleElems = document.querySelectorAll(".handle") as any;
    const cursorElem = document.querySelector(".ace_cursor") as any;
    const codetitle = document.querySelector(".code-title") as any;
    const codeEditor = document.querySelector(".ace_editor") as any;
   
    handleElems.forEach((elem: any) => {
      elem.style.display = "none";
    });
    cursorElem.style.display = "none";
    codetitle.style.boxShadow = "none";
    codeEditor.style.boxShadow = "none";

    const canvas = await html2canvas(editorElem);
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.download = "code.png";
    link.href = image;
    link.click();

   
    handleElems.forEach((elem: any) => {
      elem.style.display = "block";
    });
    cursorElem.style.display = "block";
    codetitle.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.2)";
    codeEditor.style.boxShadow = "2px 3px 10px rgba(0, 0, 0, 0.2)";
  }
};

  return (
    <main className="flex w-full h-[100vh] pl-4 pt-2 items-center ">
      <div className="w-[22%] overflow-y-auto no-scrollbar p-5 text-white fixed h-[520px]  z-10 bg-[#191919] rounded border border-[#3C3C3C] shadow-md">
        <h2 className="font-black pb-2 text-4xl">CodeCanvas</h2>
         <SelectLanguage  language={language}
          setLanguage={setLanguage}
          seActiveIcon={setActiveIcon}/>
<SelectTheme theme={theme} setTheme={setTheme}/>
<SelectBackground
          background={background}
          setBackground={setBackground}
        />

        <SelectPadding
          paddings={paddings}
          currentPadding={currentPadding}
          setCurrentPadding={setCurrentPadding}
        />
<div className="export-btn self-center ml-auto pt-4">
          <button
            className="flex items-center gap-3 py-2 px-3 bg-blue-400 rounded-md text-sm text-blue-400 
              font-medium bg-opacity-10 hover:bg-opacity-80 hover:text-slate-50 ease-in-out transition-all 
              duration-300"
            onClick={exportPng}
          >
            <Download />
            Export PNG
          </button>
        </div>
      </div>
    <div className="w-[78%] ml-[22%] code-editor-ref w-full flex justify-center" ref={editorRef}
    >
      <Canvas language={language}
        theme={theme} 
          background={background}
          icon={activeIcon}
          currentPadding={currentPadding} />
          
    </div>
    </main>
   
  );
}
