"use client";
import {usePathname} from "next/navigation";
import myLogo from "../icon.png";
import Image from "next/image";
export default function NavBar() {
    const pathname = usePathname();
    const getLinkClass = (path: string) => {
        const base="p-5 rounded-md font-medium transition-all duration-300";
        const active=" bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent";
        const inactive=" text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700";
        return `${base} ${pathname === path ? active : inactive}`;

    };
	return (
      
		<header className="flex flex-row items-center list-none sticky top-0 z-50  bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit " >
          <div>
          <a href="/"><Image src={myLogo} alt="Logo" width={80} height={80} className="rounded-full" priority /></a>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
           <ul className="flex flex-row justify-center items-center gap-6  ">
            <li><a href="/dashboard/about" className={getLinkClass("/dashboard/about")}>About</a></li>
            <li><a href="/dashboard/project" className={getLinkClass("/dashboard/project")}>Projects</a></li>
          </ul> 
          </div>
        </header>
	);
}
