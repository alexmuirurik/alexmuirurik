import { Pacifico } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })
const Hero = () => {
    const date = new Date()
    const bg = `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='100' height='100' fill='none' stroke='rgb(0 0 0 / 0.2)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e`
    const experience = {
        writing: date.getFullYear() - 2018,
        coding: date.getFullYear() - 2021,
    }

    return (
        <section
            className=" dark:bg-[#0b2c5d] bg-[#cec6bd] hero items-start p-0 xl:items-center relative h-[90svh] md:h-[70svh] z-10 border dark:border-gray-700 rounded-b-md overflow-hidden"
            id="hero"
        >
            <div className="container flex justify-center !p-8 mb-8">
                <div className="flex flex-col items-center sm:w-full lg:w-9/12 z-10">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <h5 className=" font-extrabold text-cyan-300">
                            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-thin uppercase">
                                Welcome to my Portfolio Site
                            </span>
                        </h5>
                        <h3
                            className={
                                pacifico.className +
                                ' text-3xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-nunito'
                            }
                        >
                            <span className="text-purple-100">
                                I&apos;m Alex Muiruri
                            </span>
                        </h3>
                        <p className="text-center mt-5">
                            A full-stack web and mobile developer with{' '}
                            {experience.coding} years of coding experience.
                            I&apos;ll help you create React Native, Android,
                            front-end, and Nextjs apps and deploy them on AWS,
                            Vercel, or Azure.
                        </p>
                    </div>
                    <div className="btns flex justify-between mt-8 w-full md:w-4/5 xl:w-3/5">
                        <Link
                            className="bg-teal-600 hover:bg-teal-500 px-4 py-2 border border-teal-600 rounded-lg"
                            href="/portfolio"
                        >
                            View My Portfolio
                        </Link>
                        <Link
                            className="bg-purple-600 hover:bg-purple-500 px-4 py-2 border border-teal-600 rounded-lg"
                            href="/assets/doc/Resume-Alex-Muiruri-1.pdf"
                            target="_blank"
                        >
                            Download CV
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
                            Technical Writer, Javascript Developer, NextJs
                            Developer, Laravel Developer and Full Stack System
                            Developer
                        </p>
                    </div>
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4 mt-4 md:mt-0">
                        <h5 className="text-sm text-emerald-600 font-bold mb-1">
                            Skills Earned
                        </h5>
                        <p className="text-xs">
                            Documentation Writing, React, NextJs, NuxtJs, Vue,
                            PHP, Laravel, Jquery, MySQL, PostgreSQL, MongoDB,
                            APIs, and OAuth
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
