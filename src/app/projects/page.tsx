import Image from "next/image";
import Link from "next/link";
export default function Projects() {
    return (
      <div className="container pt-16 sm:pt-32 px-5 sm:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10">MY PROJECTS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          <div className="bg-slate-500 rounded-lg overflow-hidden shadow-lg">
            <Link href="https://resuma-builder-milestone-2.vercel.app/">
              <div>
                <Image alt="Picture of the project1" src="/p-1.png" width="400" height="100" className="w-full h-auto" />
              </div>
              <div className="p-5">
                <h2 className="text-blue-800 font-medium text-lg">Dynamic Resume Builder</h2>
                <p className="text-gray-300 text-sm">A website that allows users to build their resumes.</p>
                <div className="flex justify-evenly mt-4">
                  <span className="bg-gray-600 px-2 py-1 rounded-full text-xs">Html</span>
                  <span className="bg-blue-500 px-2 py-1 rounded-full text-xs">CSS</span>
                  <span className="bg-yellow-500 px-2 py-1 rounded-full text-xs">Javascript</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-slate-500 rounded-lg overflow-hidden shadow-lg">
            <Link href="https://class-6-project-pakwheels-web.vercel.app/">
              <div>
                <Image alt="Picture of the Project2" src="/p-2.png" width="500" height="100" className="w-full h-auto" />
              </div>
              <div className="p-5">
                <h2 className="text-blue-800 font-medium text-lg">Car selling and buying website</h2>
                <p className="text-gray-300 text-sm">A website that allows users to buy and sell their cars.</p>
                <div className="flex justify-evenly mt-4">
                  <span className="bg-black px-2 py-1 rounded-full text-xs">Next.js</span>
                  <span className="bg-blue-800 px-2 py-1 rounded-full text-xs">tailwind CSS</span>
                  <span className="bg-zinc-600 px-2 py-1 rounded-full text-xs">React.js</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-slate-500 rounded-lg overflow-hidden shadow-lg">
            <Link href="https://class-5-project-lxul.vercel.app/?__vercel_draft=1">
              <div>
                <Image alt="Picture of the project3" src="/p-3.png" width="500" height="100" className="w-full h-auto" />
              </div>
              <div className="p-5">
                <h2 className="text-blue-800 font-medium text-lg">A website only using Tailwind CSS</h2>
                <p className="text-gray-300 text-sm">This is my first web site using tailwind css.</p>
                <div className="flex justify-evenly mt-4">
                  <span className="bg-black px-2 py-1 rounded-full text-xs">Next.js</span>
                  <span className="bg-blue-800 px-2 py-1 rounded-full text-xs">tailwind CSS</span>
                  <span className="bg-zinc-600 px-2 py-1 rounded-full text-xs">React.js</span>
                </div>
              </div>
            </Link>
          </div>

        </div>
        <footer className="bg-black text-white py-5 mt-10 text-center">
          <p>&copy; 2023 Huzaifa Rehan. All rights reserved.</p>
        </footer>
      </div>
    );
}