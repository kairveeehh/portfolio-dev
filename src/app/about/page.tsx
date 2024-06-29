import React from "react";
import { FaTools } from 'react-icons/fa';
export function generateMetadata() {
    return {
        title: "About - Kairvee",
        description: "Hi. I'm Shiva Bhattacharjee, a self-taught full stack developer from Guwahati Assam India. I'm a student currently pursuing my bachelors in Computer Science and Technology, I love build software that solves real world problems which is probably why everything I build is Open Source.My everyday tech stack includes NEXTJS , Typescript , Tailwind , and so on ....",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}


import CertificationsSection from "@/components/cert";
import ReadmeDisplay from "@/components/readme";

const certifications = [
    {
      id: 1,
      title: "SQL-Basic to Advanced",
      image: "/assests/images/geekster.png",
      description: "Received the certificate for comple the geekster SQL assignments",
      issuer: "Geekster",
      date: "2024-05-12"
    },
    {
        id: 2,
        title: "Bitcoin Script & Enterprise Course",
        image: "/assests/images/bitcoin.png",
        description: "Comprehensive course on Bitcoin and blockchain technologies.",
        issuer: "BSV Academy",
        date: "2024-06-15"
      },
      {
        id: 3,
        title: "Rookie Developer Badge",
        image: "/assests/images/tsoc.png",
        description: "Earned for assignment completion of the workshops in TSoC'24",
        issuer: "TimeChain Labs",
        date: "2024-06-35"
      },
   
  ];
const AboutPage = () => {
    
    return (<section className="lg:max-w-[50%] mt-10 md:mt-12 md:max-w-[90%] relative md:m-auto p-2 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
            <div className='flex justify-center items-center'>
          <FaTools className='text-2xl mr-2' />
          <h1 className='text-center'> | About Me |</h1>
        </div>
            <ReadmeDisplay />
            <CertificationsSection certifications={certifications} />
            </div>
            </section>
   
    );
};

export default AboutPage;