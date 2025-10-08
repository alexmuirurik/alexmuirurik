import React from 'react'
import SidebarMini from './SidebarMini'

const PageHero = ({ pagename }: any) => {
    return (
        <section
            className="bg-fixed bg-cover flex justify-center items-center mix-blend-exclusion dark:mix-blend-normal h-full p-8"
            style={{ backgroundImage: "url('/img/home/bg-hero.jpg')" }}
        >
            <div className="flex lg:block justify-between items-center w-full lg:w-auto">
                <h1 className="text-4xl lg:text-center font-bold border-b-0 m-0">{pagename}</h1>
                <SidebarMini />
            </div>
        </section>
    )
}

export default PageHero
