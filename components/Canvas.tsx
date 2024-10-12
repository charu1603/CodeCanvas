"use client"
import React, { useState, useEffect } from 'react';
import { Resizable } from 're-resizable';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-typescript";

import { getExtension, initialCode } from "@/utils/utility";

interface CanvasProps {
  language: string;
  theme: string;
  icon: string;
  background?: string;
  currentPadding?: string;
}

function Canvas({
  language,
  theme,
  icon,
  background,
  currentPadding,
}: CanvasProps) {
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState<number | null>(500);
  const [title, setTitle] = useState("App");
  const [code, setCode] = useState(initialCode);
  const [extension, setExtension] = useState(".js");

  useEffect(() => {
    setExtension(getExtension(language));
  }, [language]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value.split(".")[0];
    setTitle(newTitle);
  };

 // Corrected handleResize function
const handleResize = (event: any, direction: any, ref: HTMLElement, delta: { width: number; height: number }) => {
  const newHeight = ref.style.height;
  setHeight(parseInt(newHeight, 10));
};


  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Resizable
      minHeight={466}
      minWidth={410}
      maxWidth={850}
      defaultSize={{
        width: width || 550,
        height: height || 800,
      }}
      onResize={handleResize}
      className="resize-container relative"
      style={{
        background: background,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="code-block"
        style={{
          padding: currentPadding,
          height: "100%",
          width: "100%",
        }}
      >
        {/* Your editor elements here */}
        <AceEditor
          value={code}
          name="UNIQUE_ID_OF_DIV"
          fontSize={16}
          theme={theme}
          mode={language.toLowerCase()}
          showGutter={false}
          wrapEnabled={true}
          height={`calc(${height}px - ${currentPadding} - ${currentPadding} - 52px)`}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
          onChange={handleCodeChange}
        />
      </div>
    </Resizable>
  );
}

export default Canvas;
