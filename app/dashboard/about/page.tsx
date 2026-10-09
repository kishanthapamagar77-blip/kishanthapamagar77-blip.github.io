import React from 'react'

const about = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:flex-row m-5 gap-4"> 
          <div className="w-0 md:w-0 lg:w-1/2 "> </div>
          {/* this is about me */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-full xl:w-4/5 gap-4  border-1 border-gray-300 bg-gradient-to-b from-zinc-200 p-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
              <div>
                <h2>About Me</h2>
              </div>

              <div className="flex flex-col justify-center ">  
                <p className="">Hello! I am Kishan Thapa Magar.
                  I have experience in building responsive and user-friendly websites using modern web technologies. 
                  I enjoy learning new things and improving my skills.
                </p>
              </div>

              <div className="flex flex-col justify-center ">
                <h2>Background</h2>
                <p>I am a BSC.CSIT graduate from Asian School of Management and Technology, 
                  affiliated with Tribhuvan University. I have intership experience in web development with Wordpress and PHP at MATAT Pvt. Ltd.</p>
              </div>
              
              <div className="flex flex-col justify-center ">
                <h2>Interests</h2>
                <p>I am interested in web development, software engineering, and technology in general. 
                  I enjoy exploring new tools and frameworks, and I am always looking for ways to improve my skills and knowledge.
                  Rather than that I love to take a beautiful and peacefull nap.</p>
              </div>

              <div className="flex flex-col justify-center ">
                <h2>Hobbies</h2>
                <p>In my free time, I enjoy reading books, playing video games, and spending time with my friends and family. 
                  I also enjoy outdoor activities such as hiking and biking.</p>
              </div>  

              <div className="flex flex-col justify-center ">
                <h2>Journey</h2>
                <p>First I learn basic of web development and then I learn PHP MY SQL, start building websites on a local server Xampp. And I learn basic concepts of JS then jumped to 
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
                  I am excited to see what the future holds for me in this field.
                </p>
              </div>  
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
