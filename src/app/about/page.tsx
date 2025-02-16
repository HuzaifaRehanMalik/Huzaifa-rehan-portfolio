import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="Learn more about me, my journey in Computer Science, and my passion for AI and web development." />
            </Head>

            <div className="text-white min-h-screen p-5 sm:p-10">
                <h1 className="text-center text-[40px] sm:text-[60px] font-extrabold mb-6 sm:mb-10">ABOUT ME</h1>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-10 py-6 sm:py-10 px-5 sm:px-10">
                    <div className="max-w-full sm:max-w-3xl text-center lg:text-left order-2 lg:order-1">
                        <h2 className="text-[30px] sm:text-[40px] font-bold mb-4 sm:mb-6">Introduction</h2>
                        <p className="text-base sm:text-lg leading-6 sm:leading-7 font-medium mb-4 sm:mb-6">
                            I&apos;m a Computer Science student at the University of Karachi, pursuing an ADS (Associate Degree in Science) in Computer Science. 
                            My passion lies in exploring the realms of Generative AI and large language models. 
                            I combine my interest in AI with hands-on skills in Python, JavaScript, TypeScript, HTML, and CSS. 
                            Currently, I&apos;m diving into Next.js to expand my web development toolkit and prepare for a future of creating innovative, tech-driven solutions.
                        </p>

                        <div className="py-4 sm:py-5">
                            <Link href="/cv.pdf" target="_blank" className="inline-block">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg transition-all">
                                    DOWNLOAD CV
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-shrink-0 order-1 lg:order-2">
                        <Image
                            src="/mypic.jpg"
                            alt="A professional headshot of me"
                            width={300}
                            height={300}
                            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
                        />
                    </div>
                </div>
            </div>
            <footer className="bg-black text-white py-5 mt-10 text-center">
              <p>&copy; 2023 Huzaifa Rehan. All rights reserved.</p>
            </footer>
        </>
    );
}
