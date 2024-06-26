import React from "react";
export function generateMetadata() {
    return {
        title: "About - Shiva",
        description: "Hi. I'm Shiva Bhattacharjee, a self-taught full stack developer from Guwahati Assam India. I'm a student currently pursuing my bachelors in Computer Science and Technology, I love build software that solves real world problems which is probably why everything I build is Open Source.My everyday tech stack includes NEXTJS , Typescript , Tailwind , and so on ....",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Info, MailPlus, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const AboutPage = () => {
    return (
       <h1> about kairvee</h1>
    );
};

export default AboutPage;