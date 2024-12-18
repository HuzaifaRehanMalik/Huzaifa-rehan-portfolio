import Image from "next/image";
import Link from "next/link";
export default function about() {
    return (
      <div>
        <h1 className="text-center text-[100px] font-extrabold">ABOUT ME</h1>
        <div className="flex justify-center items-center py-10 px-10">
        <Image src="/mypic.jpg" alt="this is my pic " width="400" height="50" className="py-20 px-20  " />
          <div>
            <h1 className="text-center text-[50px] font-extrabold">Introduction</h1>
            <div className="text-xl font-bold text-center leading-tight">I'm a Computer Science student at the University of the Karachi, pursuing ADS (Associate Degree in Science) in Computer Science. My passion lies in exploring the realms of Generative AI and large language models, combining my interest in AI with hands-on skills in Python, JavaScript, TypeScript, HTML, and CSS. Currently, I'm diving into Next.js to expand my web development toolkit and further prepare for a future of creating innovative, tech-driven solutions.</div>
            <div className="text-center text-[40px] font-extrabold  py-5 px-5">
              <Link href="/cv.pdf">
                <button className=" bg-blue-400 rounded-full w-96 h-20">DOWNLOAD CV</button>
              </Link>
            </div>

          </div>
        </div>
        </div>
    );
}