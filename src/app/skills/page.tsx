"use client"
import React from "react";

import { IconCloudDemo } from "@/components/skillcloud";
type CodeIconProps = React.SVGProps<SVGSVGElement>;
function CodeIcon(props: CodeIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
const skillpage = () => {
  return (
    <div>
    <h1>skills kairvee</h1>
    <IconCloudDemo />
    <div className="flex items-center space-x-2">
      <CodeIcon className="w-10 h-10 text-primary animate-[pulse_2s_ease-in-out_infinite]" />
      <h1>My Skills</h1>
    </div>
  </div>
  
  );
};

export default skillpage;