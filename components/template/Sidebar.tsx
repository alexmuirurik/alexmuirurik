'use client'
import React from 'react'
import { Pacifico } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { navbar } from './lists'
import { usePathname} from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useSidebarContext } from '@/context/usesidebar'


const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })
const Sidebar = () => {
    const {hidden} = useSidebarContext()
    const navigate = useRouter()
    const pathname = usePathname()
    const isActive = (href:string) => pathname === href
    const show = (hidden) ? 'hidden w-0' : 'w-48' 
    return (
        <aside className={ show + " sidebar-wrapper fixed lg:block lg:w-48 ease-in-out duration-1000 transition-all z-50"} 
            id='sidebarWrapper'>
            <div className="sidebar bg-platinum-light dark:bg-rich-black rounded-md w-44 py-0 h-svh z-50">
                <div className='sidebar-header'>
                    <div className="sidebar-header flex flex-col content-center items-center">
                        <Link href='/'>
                            <Image className='border-8 border-ghost-white dark:border-gun-metal rounded-full cursor-pointer' 
                                src="/img/home/alexmuiruri.jpg" alt='' height={120} width={120}/>
                        </Link>
                        <h1 className={pacifico.className + " mt-3 text-2xl font-[bold_!important] cursor-pointer"}>
                            <Link href='/' >
                                Alex Muiruri
                            </Link>
                        </h1>
                        <h4 className="text-[cadetblue] text-xs mt-0.5 font-bold cursor-pointer">
                            <Link href='/'>
                                Full-Stack Web Developer
                            </Link>
                        </h4>
                        <div className="social-links flex gap-3 mt-3">
                            <Link href="https://www.linkedin.com/in/alex-muiruri-writer/" target='_blank' className='inline-block bg-ghost-white dark:bg-gun-metal rounded-full w-9 h-9 text-center p-2 text-xs'>
                                <FontAwesomeIcon icon={faLinkedinIn} className='' />
                            </Link>
                            <Link href="https://github.com/alexmuirurik?tab=overview&from=2023-12-01&to=2023-12-31" target='_blank' className='inline-block bg-ghost-white dark:bg-gun-metal rounded-full w-9 h-9 text-center p-2 text-xs'>
                                <FontAwesomeIcon icon={faGithub} className='' />
                            </Link>
                            <Link href="https://x.com/kiruri_alex" target='_blank' className='inline-block bg-ghost-white dark:bg-gun-metal rounded-full w-9 h-9 text-center p-2 text-xs'>
                                <FontAwesomeIcon icon={faTwitter} className='' />
                            </Link>
                        </div>
                    </div>
                    <div className="sidebar-body">
                        <ul className="menu">
                            {navbar.map((nav, i) => {
                                const active = (isActive(nav.url)) ? 'active' : ''
                                return(
                                    <li key={i}>
                                        <Link href={nav.url} className={ active +' flex items-center py-3 px-5 !mb-2 !text-base'}>
                                            {nav.title}
                                        </Link>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar