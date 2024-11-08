import Link from "next/link";

const currentYear = new Date().getFullYear()
export function Footer () {
    return (
        <footer className="h-[68px]  flex flex-col  md:flex-row justify-between md:items-center bg-gray-300 px-2 md:px-12 lg:p-16">
            <div>
            <p className="text-2x1 text-gray-800 mb-1">wholesalers NG</p>
            <p className="text-gray-600 text-xs">&copy; {currentYear} 2024 All Rights Reserved</p>
            </div>

            <ul className="flex items-center">
                <li className="text-xs text-gray-600">
                    <Link href="#">site map</Link>
                </li>
                <li className="text-xs text-gray-600">
                    <Link href="#">terms of use</Link>
                </li>
                <li className="text-xs text-gray-600">
                    <Link href="#">Report a Bug</Link>
                </li>



            </ul>
        </footer>
    )
}