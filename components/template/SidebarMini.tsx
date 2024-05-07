'use client'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SidebarMini = () => {
    const [bars, setbars]   =   useState(faBars)
    const hideSidebar       =   () => {
        if(screen.width > 1024) return 
        const sidebarWrapper = document.getElementById('sidebarWrapper')
        if(bars === faBars){
            sidebarWrapper?.classList.remove('hidden', 'w-0')
            sidebarWrapper?.classList.add('w-48')
            return setbars(faBarsStaggered)
        }
        
        sidebarWrapper?.classList.add('hidden', 'w-0')
        sidebarWrapper?.classList.remove('w-48')
        return setbars(faBars)
    }
    
    return (
        <Link href='#' className='sidebarmini lg:hidden ease-in-out duration-800' onClick={hideSidebar}>
            <FontAwesomeIcon icon={bars} className='pt-4 px-2 text-xl' />
        </Link>
        
    )
}

export default SidebarMini