'use client'
import { useSidebarContext } from '@/context/usesidebar'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const SidebarMini = () => {
    const [bars, setbars]   =   useState(faBars)
    const {hidden, setHidden} = useSidebarContext()
    const hideSidebar =   () => {
        if(hidden){
            setHidden(false)
            return setbars(faBarsStaggered)
        }
        setHidden(true)      
        return setbars(faBars)
    }
    
    return (
        <Link href='#' className='sidebarmini lg:hidden ease-in-out duration-800' onClick={hideSidebar}>
            <FontAwesomeIcon icon={bars} className='pt-4 px-2 text-xl' />
        </Link>
        
    )
}

export default SidebarMini