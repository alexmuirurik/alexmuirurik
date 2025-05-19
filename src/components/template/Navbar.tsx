'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeMode from './ThemeMode'
import ToastStart from '../toast/ToastStart'
import SidebarMini from './SidebarMini'

const Navbar = () => {
    const [message, setmessage] = useState('')
    const copyEmail = (e: any) => {
        navigator.clipboard.writeText('content@alexmuiruri.com')
        setmessage('Email Copied')

        return setTimeout(() => {
            const toast = document.getElementById('toastStart')
            return setmessage('')
        }, 2000)
    }
    return (
        <nav className="sticky w-full top-0 bg-platinum-light dark:bg-rich-black z-30 lg:z-50">
            <div className="flex items-center gap-6 px-2">
                <div className="header-img">
                    <Image
                        className="mt-2"
                        src="/img/home/hhjf.webp"
                        width={40}
                        height={40}
                        alt=""
                    />
                </div>
                <div className="nav-items overflow-hidden hidden sm:block">
                    <ul className="flex gap-4">
                        <li className="px-2 py-1 border border-transparent hover:border-neutral-300 rounded-lg ">
                            <Link href="/contact" className="text-sm">
                                Contact
                            </Link>
                        </li>
                        <li className="px-2 py-1 border border-transparent hover:border-neutral-300 rounded-lg ">
                            <Link
                                href="#"
                                className="text-sm"
                                onClick={copyEmail}
                            >
                                Content@alexmuiruri.com
                            </Link>
                        </li>
                        <li className="px-2 py-1 border border-transparent hover:border-neutral-300 rounded-lg ">
                            <Link href="/about" className="text-sm">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="theme-mode ms-auto">
                    <ThemeMode />
                    <SidebarMini />
                </div>
            </div>
            {message && <ToastStart message={message} />}
        </nav>
    )
}

export default Navbar
