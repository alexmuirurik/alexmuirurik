'use client'
import { useSidebarContext } from '@/src/context/usesidebar'
import Link from 'next/link'
import { useEffect } from 'react'
import {} from 'react-icons'
import { FaIndent, FaOutdent } from 'react-icons/fa'

const SidebarMini = () => {
    const { hidden, setHidden } = useSidebarContext()

    useEffect(() => {
        const main = document.getElementById('main')
        if (main) {
            const eventlistener = main.addEventListener('click', () => {
                setHidden(true)
            })
            return main.removeEventListener('click', () => {
                setHidden(true)
            })
        }
    }, [])

    return (
        <Link
            href="#"
            className="sidebarmini lg:hidden ease-in-out duration-800"
            onClick={() => setHidden(!hidden)}
        >
            {hidden ? (
                <FaOutdent className="text-xl h-8 w-8" />
            ) : (
                <FaIndent className="text-xl h-8 w-8" />
            )}
        </Link>
    )
}

export default SidebarMini
