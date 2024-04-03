import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    const date = new Date
    const experience = {
        writing : date.getFullYear() - 2018, 
        coding  : date.getFullYear() - 2020
    }
    
    return (
        <section className="hero items-start p-0 xl:items-center relative h-[90svh] md:h-[70svh] dark:bg-[#2c363f] bg-[#cec6bd] z-10 border dark:border-gray-700 rounded-b-md overflow-hidden" 
            style={{backgroundImage: "url(/img/home/home.png)"}} id="hero">
            <div className="container p-8 mb-8">
                <div className="">
                    <div className="sm:w-3/4 md:w-3/5">
                        <h5 className='text-xl md:text-2xl font-extrabold'>Hi there, </h5>
                        <h3 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>I&apos;m <span className='text-success'>Alex Muiruri</span></h3>
                        <h5 className="text-xl md:text-2xl font-semibold">A <span className=''>Full Stack Web Developer</span></h5>
                        <p className='mt-5'>I have {experience.writing} years of freelance tech and casino writing experience, plus {experience.coding} years of coding 
                        experience. I&apos;m here to help you design dashboard platforms using NodeJS, NextJS, and Laravel and craft engaging content for your website.</p>

                    </div>
                    <div className="btns flex justify-between mt-8 sm:w-3/4 md:w-2/5">
                        <Link className='btn btn-sm btn-success' href='/portfolio'>View My Portfolio</Link> 
                        <Link className="btn btn-sm btn-primary" href='/assets/doc/Resume-Alex-Muiruri-1.pdf' target='_blank'>Download CV</Link>
                    </div>
                </div>
            </div>
            <div className="absolute bg-white dark:bg-black border-t dark:border-gray-800 p-4 bottom-0 w-100">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4">
                        <h5 className='text-sm mb-1'>Open to work</h5>
                        <p className='text-xs'>Jobs: Freelance Copywriter, Technical Writer, Web Content Writer, Laravel Developer and Full Stack System Developer</p>
                    </div>
                    <div className="md:w-1/2 rounded-md bg-ghost-white dark:bg-card-dark p-4 mt-4 md:mt-0">
                        <h5 className='text-sm mb-1'>Skills Earned</h5>
                        <p className='text-xs'>Blog Writing, SEO Writing, Tech Writing, Proofreading, Documentation Writing, React, PHP, Laravel, Jquery, MySQL, APIs, and OAuth</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero