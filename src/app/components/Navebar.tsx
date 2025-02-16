'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white text-black">
            <div className="flex justify-between items-center py-2 px-5 sm:px-20">
                <div className="font-extrabold rounded-xl">
                    <Image src="/logo.jpg" alt="logo" width="60" height="50" className="rounded-full" />
                </div>
                <div className="hidden md:flex justify-center items-center font-bold">
                    <div className="px-3 sm:px-5">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="px-3 sm:px-5">
                        <Link href="/about">About</Link>
                    </div>
                    <div className="px-3 sm:px-5">
                        <Link href="/skills">Skills</Link>
                    </div>
                    <div className="px-3 sm:px-5">
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div className="px-3 sm:px-5">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center font-bold text-center">
                    <div className="py-2">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="py-2">
                        <Link href="/about">About</Link>
                    </div>
                    <div className="py-2">
                        <Link href="/skills">Skills</Link>
                    </div>
                    <div className="py-2">
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div className="py-2">
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            )}
        </div>
    );
}