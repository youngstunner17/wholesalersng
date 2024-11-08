"use client"
import { uesState} from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi"
import { MdCancelPresentation, mdcancelpresentation } from "react-icons/md"
export function Navbar () {
    const [menuControl,setMenuControl] =useState(false);
    return (
        <>
        <nav className="h-[60px] justify-between items-center px-2 md:px-12 lg:px-16 shadow-md">
            <ul className="flex items-center gap-4">
                <li className="text-x1  font-bold">Wholesares Ng</li>
                <li><Link href="#" className="text-md">Home</Link></li>
            </ul>

            <ul className=" hidden lg:flex items-center gap-4">
                <li className="text-x1  font-bold">Categories</li>
                <li><Link href="#" className="text-md">Contact us</Link></li>
                <li><Link href="#" className="text-md">Signup</Link></li>
            </ul>

            <div className="flex lg:hidden">
                {
                !menuControl?
                <GiHamburgerMenu onClick={() => setMenuControl(true)} className="text-2x1 text-gray-700"/>
                <MdCancelPresentation  onClick={() => setMenuControl(false)} className="text-2x1 text-gray-700"/>
                 }
                
            </div>

            {/* for mobile menu */ }
            {
            menuControl ?
            <ul className="absolute top-[60px] w-full bg-white shadow-md flex flex-col gap-4 border-t border-gray-200 p-4">
            <li><Link href="#" className="text-sm text-gray-600">Categories</Link>/li>
            <li><Link href="#" className="text-sm text-gray-600">Categories</Link>/li></li>
            <li><Link href="#" className="text-sm text-gray-600">Categories</Link>/li></li>
            </ul>
            }
        </nav>
        </>
    )
}