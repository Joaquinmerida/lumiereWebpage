'use client'

import Link from 'next/link'
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="bg-black w-full py-8">
            <div className="flex flex-wrap justify-evenly items-start text-center text-white w-full">
                <ul className="list-none w-1/2 md:w-1/4 mb-6">
                    <p className="font-bold text-lg mb-3">Contact Us</p>
                    <li>123 Elegant Ave.</li>
                    <li>New York, NY 10001</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: info@lumierenyc.com</li>
                </ul>
                <ul className="list-none w-1/2 md:w-1/4 mb-6">
                    <p className="font-bold text-lg mb-3">Opening Hours</p>
                    <li>Monday - Thursday:</li>
                    <li>5:00 - 10:00 PM</li>
                    <li>Friday - Saturday:</li>
                    <li>5:00 PM - 11:00 PM</li>
                    <li>Sunday 5:00 PM - 9:00 PM</li>
                </ul>
                <div className="flex flex-col justify-center items-center w-1/2 md:w-1/4 mb-6">
                    <p className="font-bold text-lg mb-3">Quick Links</p>
                    <ul className="list-none w-full">
                        <li className="my-2"><Link href="/">Home</Link></li>
                        <li className="my-2"><Link href="/menu">Menu</Link></li>
                        <li className="my-2"><Link href="/aboutUs">About Us</Link></li>
                        <li className="my-2"><Link href="/reservations">Reservations</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col items-center w-full md:w-1/4 mb-6">
                    <p className="font-bold text-lg mb-3">Follow Us</p>
                    <div className="flex justify-evenly w-2/3 md:w-1/2">
                        <Link target='_blank' href='https://www.instagram.com/'>
                            <Image
                                src="/igLogo.png"
                                width={50}
                                height={50}
                                alt="Instagram logo"
                                className="p-2"
                            />
                        </Link>
                        <Link target='_blank' href='https://www.facebook.com/'>
                            <Image
                                src="/fbLogo.png"
                                width={50}
                                height={50}
                                alt="Facebook logo"
                                className="p-2"
                            />
                        </Link>
                        <Link target='_blank' href='https://www.x.com/'>
                            <Image
                                src="/xLogo.png"
                                width={50}
                                height={50}
                                alt="X logo"
                                className="p-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 text-center pt-4">
                © 2024 Lumière. All Rights Reserved. | Privacy Policy | Terms of Service
            </p>
        </footer>
    );
}
