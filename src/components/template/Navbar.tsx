'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ThemeMode from './ThemeMode'
import ToastStart from '../toast/ToastStart'
import SidebarMini from './SidebarMini'
import { toast } from 'sonner'
import { Music } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="sticky w-full top-0 bg-platinum-light dark:bg-rich-black z-30 lg:z-50">
            <div className="flex items-center justify-between gap-6 px-2">
                <div className="header-img">
                    <Music className="text-4xl" />
                </div>
                <div className="nav-items overflow-hidden hidden sm:block">
                    <ul className="flex gap-4">
                        <li className="px-2 py-1 border border-transparent hover:border-neutral-300 rounded-lg ">
                            <Link href="/contact" className="text-sm">
                                Contact
                            </Link>
                        </li>

                        <li className="px-2 py-1 border border-transparent hover:border-neutral-300 rounded-lg ">
                            <Link href="/about" className="text-sm">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex m items-center gap-2 lg:hidden ms-auto">
                    <ThemeMode />
                    <SidebarMini />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
