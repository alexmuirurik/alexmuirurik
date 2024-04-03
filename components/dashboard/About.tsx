import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className="about mt-4 rounded-md dark:bg-black bg-white" id="about">
            <div className="">
                <div className="md:flex md:column-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark w-full md:w-8/12 lg:w-9/12 rounded-md p-6 mb-4 md:mb-0">
                        <h2 className="card-title">About Me</h2>
                        <div className="card">
                            <div className="card-body p-0 ">
                                <p> Thanks for visiting my resume website. I&apos;d be glad if you hit that &apos;Contact Me&apos; button
                                    above and tell me more about yourself. </p>
                                <p>Hi there,</p>
                                <p>I&apos;m a tech writer and Laravel Developer with over 5 years of experience. I specialize in creating
                                    curated content for fintech, cyber security, web development, cloud hosting, and investment companies.</p>
                                <p>I can help you connect with customers, increase brand awareness, and improve your search
                                    engine ranking with high-quality content. Contact me at content@alexmuiruri.com for long and
                                    short-form copy, blog posts, feature articles, and email copy.</p>
                                <p>If you&apos;re scrolling through website, you can just read one of my samples below and tell me what you think. Your views are important to me. Thanks.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-ghost-white dark:bg-card-dark w-full md:w-4/12 lg:w-3/12 rounded-md py-6 px-4">
                        <h2 className="card-title">Projects</h2>
                        <p className="section-description text-sm">Sample Projects I&apos;ve worked on before</p>
                        <div className="card">
                            <div className="card-body p-0 pt-2">
                                <div className="list-group ">
                                    <div className="flex border-t dark:border-gray-700 pt-4">
                                        <div className="side w-1/6">
                                            <Image src="/img/home/react.png" alt="" height={30} width={30} />
                                        </div>
                                        <div className="aside">
                                            <h3><a href="https://netfleas.alexmuiruri.com" target="_blank">React Movie Site</a></h3>
                                            <p><span>With: <small>React, TheMovieDB</small></span></p>
                                        </div>
                                    </div>
                                    <div className="flex border-t dark:border-gray-700 pt-4">
                                        <div className="side w-1/6">
                                            <Image src="/img/home/laravel.png" alt="" height={30} width={30}/>
                                        </div>
                                        <div className="aside">
                                            <h3>Simple Laravel Blog</h3>
                                            <p><span>With: <small>Laravel, Bootstrap</small></span></p>
                                        </div>
                                    </div>
                                    <div className="flex border-t dark:border-gray-700 pt-4">
                                        <div className="side w-1/6">
                                            <Image src="/img/home/postgresql.png" alt="" height={30} width={30}/>
                                        </div>
                                        <div className="aside">
                                            <h3><a href="https://demo.alexmuiruri.com" target="_blank">Writers Management System</a></h3>
                                            <p><span>With: <small>PHP, MySQL, Jquery</small></span></p>
                                        </div>
                                    </div>
                                    <div className="flex border-y dark:border-gray-700 pt-4">
                                        <div className="side w-1/6">
                                            <Image src="/img/home/laravel.png" alt="" height={30} width={30}/>
                                        </div>
                                        <div className="aside">
                                            <h3>Chama Management Website</h3>
                                            <p><span>With: <small>Laravel, Argon Dashboard</small></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About