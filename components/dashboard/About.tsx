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
                                    I&apos;m Alex Muiruri, a tech writer and full-stack web developer. I specialize in creating curated content for fintech, cyber security, 
                                        web development, cloud hosting, and investment companies and developing admin dashboards for SMBs. 
                                </p>
                                <p>
                                    I can work with an agile team to develop a system than meets your requirements or design an entire system from scratch. 
                                    I&apos;m well-versed in creating Laravel, React, NextJS, and Python applications with basic to complex functionalities. 
                                </p>
                                <p>
                                    I can also help you create AI-free and original content that connects with customers, increases brand awareness, and improves your search engine ranking. 
                                    Contact me at <span className='font-bold text-cyan-600'>content@alexmuiruri.com</span> for long and short-form copy, blog posts, feature articles, and custom web designs.
                                </p>
                                <p>
                                    If you&apos;re just scrolling through my website, read one of my sample articles below and tell me what you think. Your views are important to me. Thanks.
                                </p>
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