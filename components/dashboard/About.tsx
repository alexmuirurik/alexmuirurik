import Image from 'next/image'
import React from 'react'
import Projects from './projects'

const About = () => {
    return (
        <section className="about mt-4 rounded-md dark:bg-black bg-white" id="about">
            <div className="">
                <div className="md:flex md:column-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark w-full md:w-8/12 lg:w-9/12 rounded-md p-6 mb-4 md:mb-0">
                        <h2 className="card-title">About Me</h2>
                        <div className="card">
                            <div className="card-body p-0 ">
                                <p> 
                                    Thanks for visiting my resume website. Read on to learn about my skills and services -- hopefully I&apos;ll help you eliminate that initial skeptism :)  
                                </p>
                                <p>Hi there,</p>
                                <p>
                                    I&apos;m Alex Muiruri, a full-stack web developer. I specialize in creating web applications for system administration and monitoring. 
                                    Think job boards, eCommerce shops, inventory management applications, and file management systems. 
                                </p>
                                <p>
                                    I can work with an agile team to develop a system that meets your requirements or design an entire system from scratch. 
                                    I&apos;m well-versed in technologies like Laravel, React, NextJS, and Django and can build apps with basic to complex functionalities. 
                                </p>
                                <p>
                                    I can also help you build WordPress themes and plugins, craft UX/UI designs using JS and CSS, and create React-Native mobile applications. 
                                    Contact me at <span className='font-bold text-cyan-600'>content@alexmuiruri.com</span> for custom web designs.
                                </p>
                                <p>
                                    If you&apos;re just scrolling through my website, read some of my articles below and tell me what you think. Your views are important to me. 
                                </p>
                                <p>Kind regards</p>
                            </div>
                        </div>
                    </div>
                    <Projects />
                </div>
            </div>
        </section>
    )
}

export default About