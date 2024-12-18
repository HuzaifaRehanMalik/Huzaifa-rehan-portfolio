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

            <div className="bg-gray-900 text-white min-h-screen p-10">
                <h1 className="text-center text-[60px] font-extrabold mb-10">ABOUT ME</h1>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-10 px-10">
                    <div className="flex-shrink-0">
                        <Image
                            src="/mypic.jpg"
                            alt="A professional headshot of me"
                            width={400}
                            height={400}
                            className="rounded-full shadow-lg"
                        />
                    </div>

                    <div className="max-w-3xl text-center lg:text-left">
                        <h2 className="text-[40px] font-bold mb-6">Introduction</h2>
                        <p className="text-lg leading-7 font-medium mb-6">
                            I'm a Computer Science student at the University of Karachi, pursuing an ADS (Associate Degree in Science) in Computer Science. 
                            My passion lies in exploring the realms of Generative AI and large language models. 
                            I combine my interest in AI with hands-on skills in Python, JavaScript, TypeScript, HTML, and CSS. 
                            Currently, I'm diving into Next.js to expand my web development toolkit and prepare for a future of creating innovative, tech-driven solutions.
                        </p>

                        <div className="py-5">
                            <Link href="/cv.pdf" passHref>
                                <a target="_blank" className="inline-block">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all">
                                        DOWNLOAD CV
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
