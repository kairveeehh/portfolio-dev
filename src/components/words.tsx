import React from "react";
import { FlipWords } from "./ui/words";

export function FlipWordsDemo() {
  const words = [ "CPer", // bc space k lie bhi unicode 
    "MERN\u00A0Developer",
    "Web-3\u00A0Enthusiast",
    "OpenSource\u00A0Contributor",
    "DevOps\u00A0Evangelist",
    "Coder",
  "Freelancer"]

  return (
    <div className="justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-5 mb-3">
      I am a 
        <FlipWords words={words} /> <br />
       
      </div>
    </div>
  );
}
