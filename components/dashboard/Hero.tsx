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
        <section className=" dark:bg-[#0b2c5d] bg-[#cec6bd] hero items-start p-0 xl:items-center relative h-[90svh] md:h-[70svh] z-10 border dark:border-gray-700 rounded-b-md overflow-hidden" id="hero">
            <div className="container flex p-8 mb-8">
                <div className="sm:w-full lg:w-9/12 z-10">
                    <div className="">
                        <h5 className='text-xl md:text-2xl font-extrabold text-cyan-300'>
                            <span>Hi there, </span> 
                            <span className=''>I&apos;m</span>
                        </h5>
                        <h3 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>
                            <span className='text-success'>Alex Muiruri</span>
                        </h3>
                        <p className='mt-5'>
                            I have {experience.coding} years of coding experience with technologies such as ReactJS, NextJS, Django, and Laravel. 
                            I&apos;ll help you build the front-end, back-end, or entire web application from scratch and deploy it on AWS, Vercel, Azure, or CPanel. 
                        </p>
                    </div>
                    <div className="btns flex justify-between mt-8 w-full md:w-4/5 xl:w-3/5">
                        <Link className='btn btn-sm btn-success' href='/portfolio'>View My Portfolio</Link>
                        <Link className="btn btn-sm btn-primary" href='/assets/doc/Resume-Alex-Muiruri-1.pdf' target='_blank'>Download CV</Link>
                    </div>
                </div>
                <div className="absolute border- rounded-lg w-full lg:w-6/12 h-full right-0 bottom-3 z-0 ">
                    <Image className='!static rounded-tl-full w-full h-fit' src={'/img/home/icon.jpg'} alt='' fill />
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