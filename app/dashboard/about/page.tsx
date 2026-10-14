import Image from "next/image";
import myLogo from "../../icon.png";
import AboutMe from "@/app/components/aboutme";

const about = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-row m-5 gap-4"> 
          <div className="w-0 md:w-0 lg:w-1/2 flex justify-center ">
              <a href="/"><Image src={myLogo} alt="Logo"  className="rounded-full" priority /></a>
           </div>
          {/* this is about me */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/2 xl:w-4/5 gap-4  min-h-[600px] border-1 border-gray-300 bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
            <AboutMe />
            
          </div>
          {/* this is my skills */}
          <div className="flex flex-col w-full md:w-1/2 gap-4  border-1 border-gray-300 bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              <div className="flex flex-col justify-center ">  
                <h2>My Skills</h2>
                <p> I have experience with various programming languages and frameworks, including JavaScript, TypeScript, React, Node.js, and more.</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default about
