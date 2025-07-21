import { siteMeta } from '@/src/lib/sitemeta'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const pacifico = Pacifico({ subsets: ['cyrillic'], weight: ['400'] })
const Hero = () => {

    return (
        <section
            className=" dark:bg-[#253348] bg-[#cec6bd] hero items-start p-0 xl:items-center relative h-[90svh] md:h-[70svh] z-10 border dark:border-gray-700 rounded-b-md overflow-hidden"
            id="hero"
        >
            <div className="container flex justify-center !p-8 mb-8">
                <div className="flex flex-col items-center sm:w-full lg:w-9/12 z-10">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h5 className=" font-extrabold text-cyan-300 border-b-0">
                            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-thin uppercase">
                                {siteMeta.title}
                            </span>
                        </h5>
                        <h3
                            className={
                                pacifico.className +
                                ' text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-nunito border-b-0'
                            }
                        >
                            <span className="text-purple-100 text-nowrap">
                                {siteMeta.nameField}
                            </span>
                        </h3>
                        <p className="hidden xs:block text-xs xs:text-sm sm:text-base text-center mt-5">
                            {siteMeta.bio}
                        </p>
                    </div>
                    <div className="btns flex justify-between mt-8 w-full gap-2 md:w-4/5 xl:w-3/5">
                        <Link
                            className="bg-teal-600 hover:bg-teal-500 px-2 sm:px-4 py-2 border border-teal-600 rounded-lg"
                            href="/portfolio"
                        >
                            <span className="text-xs sm:text-sm text-nowrap">
                                View My Portfolio
                            </span>
                        </Link>
                        <Link
                            className="bg-purple-600 hover:bg-purple-500 px-2 smpx-4 py-2 border border-teal-600 rounded-lg"
                            href="/assets/doc/Resume-Alex-Muiruri-1.pdf"
                            target="_blank"
                        >
                            <span className="text-xs sm:text-sm text-wrap">
                                Download CV
                            </span>
                        </Link>
                    </div>
                </div>
                <div
                    className={`absolute rounded-lg w-full h-full right-0 bottom-3 z-0`}
                    style={{
                        background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='100' height='100' fill='none' stroke='rgb(255 255 255 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                    }}
                ></div>
            </div>
            <div className="absolute bg-white dark:bg-black border-t dark:border-gray-800 p-4 bottom-0 w-full">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4">
                        <h5 className="text-sm text-primary font-bold mb-1">
                            Open to work
                        </h5>
                        <p className="text-xs">
                            <span className="font-bold">Jobs: </span>
                            {siteMeta.jobs}
                        </p>
                    </div>
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4 mt-4 md:mt-0">
                        <h5 className="text-sm text-emerald-600 font-bold mb-1">
                            Skills Earned
                        </h5>
                        <p className="text-xs">{siteMeta.skills}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
