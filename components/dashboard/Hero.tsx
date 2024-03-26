import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className="hero items-start p-0 xl:items-center relative h-[90svh] md:h-[70svh] dark:bg-[#2c363f] bg-[#cec6bd] z-10 border dark:border-gray-700 rounded-b-md overflow-hidden" 
            style={{backgroundImage: "url(/img/home/home.png)"}} id="hero">
            <div className="container p-8 mb-8">
                <div className="">
                    <div className="sm:w-3/4 md:w-3/5">
                        <h5 className='text-xl md:text-2xl font-extrabold'>Hi there, </h5>
                        <h3 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl font-bold'>I&apos;m <span className='text-success'>Alex Muiruri</span></h3>
                        <h5 className="text-xl md:text-2xl font-semibold">A <span className=''>Full Stack Web Developer</span></h5>
                        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis asperiores error labore a ea officiis harum quia architecto, 
                            repellendus doloremque nam amet reprehenderit cupiditate. Esse eum dolores veritatis sed odit.</p>

                    </div>
                    <div className="btns flex justify-between mt-8 sm:w-3/4 md:w-2/5">
                        <button type="button" className='btn btn-sm btn-success'>Contact Me</button> 
                        <button type="button" className="btn btn-sm btn-primary">Download CV</button>
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