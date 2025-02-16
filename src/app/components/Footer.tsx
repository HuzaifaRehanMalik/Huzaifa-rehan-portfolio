import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 px-4  text-center">
            <div className="container mx-auto">
                <div className="text-2xl font-semibold">
                    MADE BY HUZAIFA REHAN
                </div>
                <div className="flex justify-center items-center py-2 px-2">
                    <Link href="https://www.instagram.com/codingwithhuzi" legacyBehavior>
                        <a className="py-2 px-2">
                            <Image alt="Instagram" src="/insta.jpeg" width={50} height={50} className="rounded-full" />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/huzaifa-rehan-9815882a9" legacyBehavior>
                        <a className="px-2 py-2">
                            <Image alt="LinkedIn" src="/linkedin.png" width={50} height={50} className="rounded-full" />
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
