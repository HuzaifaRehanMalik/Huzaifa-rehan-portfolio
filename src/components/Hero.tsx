import Image from "next/image"
export default function Hero() {
  return (
    <div>
        <div id="hero" className="flex justify-evenly items-center">
          <div className="py-20 px-20">

            <h1 className="text-[80px] font-extrabold leading-tight">
                I&apos;m 
                Huzaifa 
                Rehan
            </h1>
            <p>I&apos;m passionate about exploring Generative AI and large language models  combining my interest in AI with hands-on skills in Python, JavaScript, TypeScript, HTML, and CSS. Currently, I&apos;m diving into Next.js to expand my web development toolkit and further prepare for a future of creating innovative, tech-driven solutions.</p>
          </div>

            <Image src="/mypic.jpg" alt="My pic" width="300" height="50" className="py-10 m-10 " />
        
        </div>
    </div>
  )
}
