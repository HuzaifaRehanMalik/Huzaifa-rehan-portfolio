import Link from "next/link";
export default function(){
    return(
        <div className="flex justify-between py-1 px-20 bg-white text-black">
            <div className="font-extrabold  rounded-xl  ">
                <Link href="/">
                    <img src=".\logo of huzi.png" width="60" className="rounded-full" />
                </Link>
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