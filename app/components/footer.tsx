

export default function Footer() {
  return (

      <footer>
        <hr></hr>
        <div className="flex flex-col  gap-4 justify-center items-center my-4">
            <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Phone:</span>
                <a 
                href="tel:+9779861234567" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-80 transition-all font-semibold"
                >
                +977 9861234567
                </a>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email:</span>
                <a 
                href="mailto:kishanthapamagar77@gmail.com" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:opacity-80 transition-all font-semibold"

                >
                kishanthapamagar77@gmail.com
                </a>
            </div>
        </div>

        <p className="text-center text-gray-500 dark:text-gray-400">Designed and Developing by Kishan Thapa magar</p>
        <p className="text-center text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} This Portfolio. All rights reserved.
        </p>
      </footer>
    
  )
}
