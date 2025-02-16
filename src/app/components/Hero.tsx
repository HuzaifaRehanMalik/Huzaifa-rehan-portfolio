import Image from "next/image"
export default function Hero() {
  return (
    <div>
        <div id="hero" className="flex flex-col md:flex-row justify-evenly items-center">
          <div className="py-10 px-5 md:py-20 md:px-20">
            <h1 className="text-4xl md:text-[80px] font-extrabold leading-tight">
                I&apos;m 
                Huzaifa 
                Rehan
            </h1>
            <p className="text-sm md:text-base">
              I&apos;m passionate about exploring Generative AI and large language models combining my interest in AI with hands-on skills in Python, JavaScript, TypeScript, HTML, and CSS. Currently, I&apos;m diving into Next.js to expand my web development toolkit and further prepare for a future of creating innovative, tech-driven solutions.
            </p>
          </div>
          <Image src="/mypic.jpg" alt="My pic" width="300" height="50" className="py-5 m-5 md:py-10 md:m-10" />
        </div>
        <footer className="bg-black text-white py-5 mt-10 text-center">
          <p>&copy; 2023 Huzaifa Rehan. All rights reserved.</p>
        </footer>
    </div>
  )
}
