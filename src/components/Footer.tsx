import Image from "next/image"
import Link from "next/link"
export default function Footer(){
    return(
        <div className="text-center py-2 px-2" >
            <div className="py-2 px-2 text-2xl font-semibold ">
                MADE BY HUZAIFA REHAN
             </div>
            <div className="flex justify-center items-center py-2 px-2">
                
                <Link href="https://www.instagram.com/codingwithhuzi/#" className="py-2 px-2">
                    
                    <Image alt="insta" src="\insta.jpeg" width="50" height="50" className="rounded-full" />
                        
                </Link>
                <Link href="https://www.linkedin.com/in/huzaifa-rehan-9815882a9/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B5vFRs0LiSbG1ZKnbf2Q%2FlQ%3D%3D" className="px-2 py-2">
                    <Image alt="linkedin" src="\linkedin.png" width="50" className="rounded-full" />
                
                </Link>
            </div>
        </div>
    )
    
}