import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>all the projects will be listed here.</p>
          <div className="flex flex-col w-full justify-center items-center gap-4 border-1 border-gray-300 bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h2>Project 1</h2> 
          <p> This project is a portfolio built with React and Node.js</p>
          <a href="https://github.com/kishanthapamagar77-blip/kishanthapamagar77-blip.github.io.git"
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-80 transition-all font-semibold">
          View Project</a>
          </div>
    </div>
  )
}

export default page
