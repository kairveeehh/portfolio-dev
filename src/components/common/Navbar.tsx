"use client";

import React from "react";
import { Home, Info, TerminalIcon} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "../ui/darkmode";

const navbarItems = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "Projects",
        href: "/Projects",
        icon: TerminalIcon,
    },
    {
        name: "Skills",
        href: "/skills",
        icon: Info,
    },
    {
        name: "About",
        href: "/about",
        icon: Info,
    },
   
];

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="z-50 lg:sticky max-w-[90%] m-auto lg:top-0">
            {/* iPad & Desktop Navbar */}
            <section className="flex w-full justify-between items-center m-auto p-2">
                <Link href="/" className="uppercase text-3xl font-bold tracking-widest relative">
                    Kairvee<span className="text-blue-700 font-bold text-8xl absolute -bottom-2">.</span>{" "}
                </Link>
                <div className="hidden lg:flex gap-5 min-w-96 justify-center items-center backdrop-blur-lg p-2">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link href={item.href} key={item.name} className={`${isActive ? "text-blue-700" : "text-gray-800 dark:text-gray-200"} flex items-center justify-center gap-2 uppercase hover:text-blue-500 duration-200 ease-linear w-36 font-medium text-center`}>
                                <item.icon /> {item.name}
                            </Link>
                        );
                    })}
                </div>
                <ModeToggle />
            </section>
            {/* Mobile Navbar */}
            <section className="fixed z-50 md:w-[30rem] md:m-auto lg:hidden bottom-10 left-0 right-0 flex flex-wrap justify-center w-full">
                <div className="flex gap-3 flex-wrap items-center w-[60%] justify-between p-2 bg-black/20 dark:bg-white/5 backdrop-blur-lg">
                    {navbarItems.map((item) => {
                        const isActive = (pathname.includes(item.href) && item.href.length > 1) || pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href} className={`${isActive ? "text-blue-700" : "text-gray-800 dark:text-gray-200"} p-2`}>
                                <item.icon />
                            </Link>
                        );
                    })}
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
