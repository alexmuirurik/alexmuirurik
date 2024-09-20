import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    const date = new Date
    const experience = {
        writing: date.getFullYear() - 2018,
        coding: date.getFullYear() - 2021
    }

    return (
        <section className="hero items-start p-0 xl:items-center relative h-[90svh] md:h-[70svh] dark:bg-[#2c363f] bg-[#cec6bd] z-10 border dark:border-gray-700 rounded-b-md overflow-hidden" id="hero">
            <div className="container flex p-8 mb-8">
                <div className="sm:w-full lg:w-4/5">
                    <div className="">
                        <h5 className='text-xl md:text-2xl font-extrabold'>Hi there, </h5>
                        <h3 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>I&apos;m <span className='text-success'>Alex Muiruri</span></h3>
                        <h5 className="text-xl md:text-2xl font-semibold">A <span className=''>Full Stack Web Developer</span></h5>
                        <p className='mt-5'>
                            I have {experience.coding} years of coding experience with technologies such as ReactJS, NextJS, NuxtJS, Django, and Laravel. 
                            I'll help you build the front-end, back-end, or the entire web application from scratch and upload it on AWS, Vercel, Azure, or Cpanel. 
                        </p>
                    </div>
                    <div className="btns flex justify-between mt-8 w-full md:w-4/5 xl:w-3/5">
                        <Link className='btn btn-sm btn-success' href='/portfolio'>View My Portfolio</Link>
                        <Link className="btn btn-sm btn-primary" href='/assets/doc/Resume-Alex-Muiruri-1.pdf' target='_blank'>Download CV</Link>
                    </div>
                </div>
                <div className="card skills hidden md:block md:w-2/5 xl:w-1/5 border dark:border-gray-700 rounded-lg h-full mb-4 p-4">
                    <div className="card-body text-sm w-full p-0">
                        <ul className="list-group list-group-flush marker:text-sky-400 list-disc pl-5 text-slate-400">
                            <li className="list-group-item p-2">NextJs and ReactJS</li>
                            <li className="list-group-item p-2">PHP, Laravel, and LiveWire</li>
                            <li className="list-group-item p-2">Python and FastAPI</li>
                            <li className="list-group-item p-2">MongoDB, PostgreSQL, and MySQL</li>
                            <li className="list-group-item p-2">Google Docs and Microsoft Word</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute bg-white dark:bg-black border-t dark:border-gray-800 p-4 bottom-0 w-100">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4">
                        <h5 className='text-sm text-primary font-bold mb-1'>Open to work</h5>
                        <p className='text-xs'>
                            <span className='font-bold'>Jobs: </span>
                            Technical Writer, Javascript Developer, NextJs Developer, Laravel Developer and Full Stack System Developer
                        </p>
                    </div>
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4 mt-4 md:mt-0">
                        <h5 className='text-sm text-emerald-600 font-bold mb-1'>Skills Earned</h5>
                        <p className='text-xs'>
                            Documentation Writing, React, NextJs, NuxtJs, Vue, PHP, Laravel, Jquery, MySQL, PostgreSQL, MongoDB, APIs, and OAuth
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero