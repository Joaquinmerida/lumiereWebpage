'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react';

export function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-black  z-50 px-5 py-3 flex justify-between items-center">
            {/* Hamburger Menu Icon */}
            <div className="block md:hidden text-white text-2xl cursor-pointer" onClick={toggleMenu}>
                ☰
            </div>
            {/* Navigation Links */}
            <ul className={`flex flex-col md:flex-row md:items-center list-none w-full md:w-auto ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                <li className="text-center md:mx-4">
                    <Link href={`/`} className={`text-white py-2 block ${pathname === '/' ? 'font-bold' : ''}`}>
                        Home
                    </Link>
                </li>
                <li className="text-center md:mx-4">
                    <Link href={`/menu`} className={`text-white py-2 block ${pathname === '/menu' ? 'font-bold' : ''}`}>
                        Menu
                    </Link>
                </li>
                <li className="text-center md:mx-4">
                    <Link href={`/aboutUs`} className={`text-white py-2 block ${pathname === '/aboutUs' ? 'font-bold' : ''}`}>
                        About Us
                    </Link>
                </li>
                <li className="text-center md:mx-4">
                    <Link href={`/reservations`} className={`text-white py-2 block ${pathname === '/reservations' ? 'font-bold' : ''}`}>
                        Reservations
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
