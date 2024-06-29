import React from "react";
import { FaTools } from 'react-icons/fa';



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