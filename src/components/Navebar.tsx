import Image from "next/image";
import Link from "next/link";
export default function Navebar(){
    return(
        <div className="flex justify-between py-1 px-20 bg-white text-black">
            <div className="font-extrabold  rounded-xl  ">
                <Image src="/logo.jpg" alt="logo"  width="60" height="50" className="rounded-full" />
               
            </div>
            <div className="flex justify-center items-center font-bold">

                <div className="px-10">
                    <Link href="/">Home</Link>
                </div>
                <div className="px-10">
                    <Link href="/about">About</Link>
                </div>
                <div className="px-10">
                    <Link href="/skills">Skills</Link>
                </div>
                <div className="px-10">
                    <Link href="/projects">Projects</Link>
                </div>
                <div className="px-10">
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

        </div>

    )
}