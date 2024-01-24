'use client';
import Link from "next/link"
import NavLink from "./NavLink"
import { useState } from "react"
import NavOverlay from "./NavOverlay";
export default function Navbar() {
    const [dropdown, setDropdown] = useState(false)
    const navContent = [
        {
            title: 'Home',
            href: '#home'
        },
        {
            title: 'About',
            href: '#about'
        },
        {
            title: 'Project',
            href: '#project'
        },
        {
            title: 'Contact',
            href: '#contact'
        }
    ]
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center mx-auto justify-between px-4 py-2">
                <Link href={'/'} className="text-2xl font-extrabold text-white"><span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{'{'}</span>RenDev<span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{'}'}</span></Link>
                <div className="md:hidden block">
                    {
                        !dropdown ? (
                            <button onClick={() => setDropdown(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        ) : (
                            <button onClick={() => setDropdown(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )
                    }
                </div>
                <div className="md:block md:w-auto hidden" id="navbar">
                    <ul className="flex p-4 md:flex-row md:p-0 md:space-x-0">
                        {
                            navContent.map((value, i) => (
                                <li key={i}>
                                    <NavLink href={value.href} title={value.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {
                dropdown ? <NavOverlay links={navContent} /> : null
            }
        </nav>
    )
}