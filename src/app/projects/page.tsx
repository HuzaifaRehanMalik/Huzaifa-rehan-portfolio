import Image from "next/image";
import Link from "next/link";
export default function projects() {
    return (
      <div>
        <h1 className="text-[100px] font-semibold text-center ">MY PROJECT </h1>
        <div className="flex py-10 px-10 justify-evenly items-center ">

        <div className="bg-slate-500 w-80 h-96 py-10 px-10 ">
          <Link href="https://resuma-builder-milestone-2.vercel.app/">
          
            <div>
              <img src="/p-1.png" width="400" height="100" />
            </div>

            <div className="text-blue-800 font-medium text-[20px]">
              Dynamic Resume Builder
            </div>
            <p>
              A website that allows users to build their resumes.
            </p>
            <div className="flex justify-evenly">

              <div className="bg-gray-600 ">Html</div>
              <div className="bg-blue-500">CSS</div>
              <div className="bg-yellow-500">Javascript</div>
            </div>
          </Link>
        </div>
        <div className="bg-slate-500 w-80 h-96 py-10 px-10 ">
          <Link href="https://class-6-project-pakwheels-web.vercel.app/">
            <div>
              <img src="/p-2.png" width="500" height="100" />
            </div>
            <div className="text-blue-800 font-medium text-[20px]">
              Car selling and buying website
            </div>
            <p>
              A website that allows users to buy and sell their cars.
            </p>
            <div className="flex justify-evenly">

              <div className="bg-black ">Next.js</div>
              <div className="bg-blue-800">tailwind CSS</div>
              <div className="bg-zinc-600">React.js</div>
            </div>
          
          </Link>
        </div>
        <div className="bg-slate-500 w-80 h-96 py-10 px-10 ">
          <Link href="https://class-5-project-lxul.vercel.app/?__vercel_draft=1">
          
            <div>
              <img src="/p-3.png" width="500"height="100" />

            </div>
            <div className="text-blue-800 font-medium text-[20px]">
              A website only using Tailwind CSS
            </div>
            <p>
              This is my first web site using tailwind css.
            </p>
            <div className="flex justify-evenly">

              <div className="bg-black ">Next.js</div>
              <div className="bg-blue-800">tailwind CSS</div>
              <div className="bg-zinc-600">React.js</div>
            </div>
          </Link>

        </div>
        </div>
      </div>
    );
}