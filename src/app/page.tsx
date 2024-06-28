import React from "react";
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, MailPlus, MouseIcon, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MyProjects from "@/components/projects";

import CopyCmd from "@/components/copycmd";
import { FlipWordsDemo } from "@/components/words";
import { DockDemo } from "@/components/dock";
import HoverImageComponent from "@/components/skills";

const projectsData = [
    {
      title: 'Project One',
      description: 'This is the first project.',
      imageSrc: '/images/project1.jpg'
    },
    {
      title: 'Project Two',
      description: 'This is the second project.',
      imageSrc: '/images/project2.jpg'
    },
    // Add more projects as needed
  ];
const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hello World
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">Hi from kairvee</h1>
                    
                </div>
               
                    <FlipWordsDemo />
                
                <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    I develop open-source <span className="  text-blue-500 uppercase font-bold">full-stack</span> apps/tools and occasionally take on <span className=" uppercase text-blue-500 font-bold tracking-wider">freelance</span> projects.
                </p>
                <div className="flex flex-col md:flex-row items-right mt-3 gap-1 md:gap-3">
                <CopyCmd />
            
    <DockDemo />
</div>
<HoverImageComponent />
<div>
<MyProjects projects={projectsData} />
</div>
</div>



             

            


              
            
        </section>
    );
};

export default page;