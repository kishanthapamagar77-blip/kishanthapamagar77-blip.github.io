"use client"; // Required at the top since we are tracking click states

import { useState } from "react";

// 1. Create temporary placeholder components for each subsection inside this file
// (You can move these to their own files later if they get too big!)
const About = () => (
  <div className="dark:text-gray-300 animate-fadeIn mt-4">
    <h2 className="text-lg font-semibold text-black dark:text-gray-300 mb-2">About Me</h2>
    <p className="text-gray-800 dark:text-gray-500">
        Hello! I am Kishan Thapa Magar.
        I have experience in building responsive and user-friendly websites using modern web technologies. 
        I enjoy learning new things and improving my skills.</p>
  </div>
);

const Background = () => (
  <div className="dark:text-gray-300 animate-fadeIn mt-4">
    <h2 className="text-lg font-semibold text-black dark:text-gray-300 mb-2">Background</h2>
    <p className="text-gray-800 dark:text-gray-500">
        I am a BSC.CSIT graduate from Asian School of Management and Technology, 
        affiliated with Tribhuvan University. I have intership experience in web development with Wordpress and PHP at MATAT Pvt. Ltd.</p>
  </div>
);

const Interests = () => (
  <div className="animate-fadeIn mt-4">
    <h2 className="text-lg font-semibold text-black dark:text-gray-300 mb-2">Interests</h2>
    <p className="text-gray-800 dark:text-gray-500">
        I am interested in web development, software engineering, and technology in general. 
        I enjoy exploring new tools and frameworks, and I am always looking for ways to improve my skills and knowledge.
        Rather than that I love to take a beautiful and peacefull nap.</p>
  </div>
);

const Hobbies = () => (
  <div className="dark:text-gray-300 animate-fadeIn mt-4">
    <h2 className="text-lg font-semibold text-black dark:text-gray-300 mb-2">Hobbies</h2>
    <p className="text-gray-800 dark:text-gray-500">
        In my free time, I enjoy reading books, playing video games, and spending time with my friends and family. 
        I also enjoy outdoor activities such as hiking and biking.</p>
  </div>
);

const Journey = () => (
  <div className="dark:text-gray-300 animate-fadeIn mt-4">
    <h2 className="text-lg font-semibold text-black dark:text-gray-300 mb-2">Journey</h2>
    <p>
        First I learn basic of web development and then I learn PHP MY SQL, start building websites on a local server Xampp. And I learn basic concepts of JS then jumped to 
        React for a week and quit it. And I learn Python for a month and quit it. Then I started to learn React again for a month and quit it. 
        This often happens to me, I start learning something and quit it after a month or two. 
        For my graduation i did internship in web development with Wordpress and PHP at MATAT Pvt. Ltd. 
        And then AI shows up which basically changed my pespective towards development thinking it will take a job. 
        And I think I should change my career path and start learning more technical things like Networking, Cloud Computing, and Cyber Security but it is same to me. 
        My age is increasing but not the knowledge and skills due to inconsistency in learning things.
        But I never give up, I came back to it and try again.
        My assumption of AI taking jobs may or may not be true, I just wanna try one more time and it make me realize 
        that it is making more easy to learn things and make easy to build things. And now I am here, 
        learning Next.js and building my portfolio website from the scratch. This is my journey and I am still learning and growing as a developer. 
        I am excited to see what the future holds for me in this field.</p>
  </div>
);

export default function AboutMe() {
  // 2. Track which inner tab item is selected
  const [activeSubTab, setActiveSubTab] = useState<string>('About Me');

  const innerNavItems = ['About_Me', 'Background', 'Interests', 'Hobbies', 'Journey'];

  // 3. Helper switch engine to evaluate what text block renders below the navigation
  const renderSubContent = () => {
    switch (activeSubTab) {
      case 'About_Me': return <About />;
      case 'Background': return <Background />;
      case 'Interests': return <Interests />;
      case 'Hobbies': return <Hobbies />;
      case 'Journey': return <Journey />;
      default: return <About />;
    }
  };

  return (
    <div className="flex flex-col w-full gap-4">
      {/* Navigation Sub-Menu Bar container matching your layout snippet */}
      <nav>
        <ul className="flex flex-row gap-2 md:gap-5  justify-center text-sm ">
          {innerNavItems.map((item) => {
            const isCurrent = activeSubTab === item;
            return (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => setActiveSubTab(item)}
                  className={`transition-colors duration-200 cursor-pointer pb-1 ${
                    isCurrent 
                      ? 'bg-gradient-to-r from-blue-500 to-red-600 bg-clip-text text-transparent border-b-2 border-blue-500 dark:border-red-600 font-semibold ' 
                      : 'hover:text-gray-500 dark:hover:text-gray-400'
                  }`}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Target Content Injected Directly Below Nav Bar Line */}
      <div className="mt-4 px-2">
        {renderSubContent()}
      </div>
    </div>
  );
}
