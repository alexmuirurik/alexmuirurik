'use client'
import React, { useState } from 'react'
import { useSidebarContext } from '@/src/context/usesidebar'
import Link from 'next/link'
import {} from 'react-icons'
import { FaBarcode, FaBars } from 'react-icons/fa'

const SidebarMini = () => {
    const { hidden, setHidden } = useSidebarContext()

    return (
        <Link
            href="#"
            className="sidebarmini lg:hidden ease-in-out duration-800"
            onClick={() => setHidden(!hidden)}
        >
            {hidden ? (
                <FaBarcode className="pt-4 px-2 text-xl" />
            ) : (
                <FaBars className="pt-4 px-2 text-xl" />
            )}
        </Link>
    )
}

export default SidebarMini
