'use client'

import { Pacifico } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { navbarList } from './lists'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useSidebarContext } from '@/src/context/usesidebar'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHackernoon } from 'react-icons/si'
import { siteMeta } from '@/src/lib/sitemeta'

const pacifico = Pacifico({ subsets: ['cyrillic'], weight: ['400'] })
const Sidebar = () => {
    const { hidden } = useSidebarContext()
    const pathname = usePathname()
    const isActive = (href: string) => {
        const path = pathname.split('/')
        const hrefPath = href.split('/')
        const hrefFirst = hrefPath[1]
        const first = path[1]
        console.log(hrefFirst, first)
        return hrefFirst === first
    }
    const show = hidden ? 'hidden w-0' : 'w-48'
    return (
        <aside
            className={
                show +
                ' sidebar-wrapper fixed lg:block lg:w-48 ease-in-out duration-1000 transition-all z-50'
            }
            id="sidebarWrapper"
        >
            <div className="sidebar bg-platinum-light dark:bg-rich-black rounded-md w-44 py-0 h-svh z-50">
                <div className="sidebar-header">
                    <div className="sidebar-header flex flex-col content-center items-center mb-4 space-y-3">
                        <Link href="/">
                            <Image
                                className="border-8 border-ghost-white dark:border-gun-metal rounded-full cursor-pointer"
                                src={siteMeta.profileImage}
                                alt=""
                                height={120}
                                width={120}
                            />
                        </Link>
                        <h1
                            className={
                                pacifico.className +
                                ' mt-3 text-2xl font-[bold_!important] cursor-pointer border-b-0 my-0'
                            }
                        >
                            <Link href="/">Alex Muiruri</Link>
                        </h1>
                        <h4 className="text-[cadetblue] text-xs font-bold cursor-pointer border-b-0">
                            <Link href="/">Full Stack Developer</Link>
                        </h4>
                        <div className="social-links flex gap-3">
                            <Link
                                href={siteMeta.social.linkedin}
                                target="_blank"
                                className="inline-flex items-center justify-center bg-ghost-white dark:bg-gun-metal rounded-full w-9 h-9 text-center p-2 text-xs"
                            >
                                <FaLinkedin />
                            </Link>
                            <Link
                                href={siteMeta.social.github}
                                target="_blank"
                                className="inline-flex items-center justify-center bg-ghost-white dark:bg-gun-metal rounded-full w-9 h-9 text-center p-2 text-xs"
                            >
                                <FaGithub />
                            </Link>
                            <Link
                                href={siteMeta.social.hackerNoon}
                                target="_blank"
                                className="inline-flex items-center justify-center bg-ghost-white dark:bg-gun-metal rounded-full w-9 h-9 text-center p-2 text-xs"
                            >
                                <SiHackernoon />
                            </Link>
                        </div>
                    </div>
                    <div className="sidebar-body mt-2">
                        <ul className="menu">
                            {navbarList.map((nav, i) => {
                                const active = isActive(nav.url) ? 'active' : ''
                                return (
                                    <li key={i}>
                                        <Link
                                            href={nav.url}
                                            className={
                                                active +
                                                ' hover:bg-card-dark [&.active]:bg-card-dark flex items-center px-8 p-4 !text-base'
                                            }
                                        >
                                            {nav.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
