import React from 'react'

const Contact = () => {
    return (
        <section className="contact rounded-md mt-4 dark:bg-black bg-white">
            <div className="">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="md:w-8/12 lg:w-9/12 ">
                        <div className="card mb-4 rounded-3 shadow-sm bg-ghost-white dark:bg-card-dark rounded-md p-6">
                            <h2 className="card-title text-md mb-4">Education:</h2>
                            <div className="card">
                                <div className="work flex mb-4">
                                    <div className="image-section w-2/6 md:w-1/6 border-l dark:border-gray-700 ps-4 pe-4">
                                        <span className='text-xs text-[#6c757d] [writing-mode:vertical-lr] lg:[writing-mode:unset]'>Data Camp</span>
                                    </div>
                                    <div className="description-section md:w-4/6 lg:w-5/6">
                                        <h3 className="work-title text-xl">Data Science With Python <small className='text-xs text-[#6c757d]'>Sep 2, 2023</small><span className='text-xs text-[#6c757d]'>-</span><small className='text-xs text-[#6c757d]'>Present</small></h3>
                                        <p><small className="work-description">I analyze different APIs for performance so we can integrate them into a riskact app. I&apos;ve tested APIs from Microsoft Teams, Slack, Twilio, Zoom, ChatGPT, and Dropbox..</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="work flex mb-4">
                                    <div className="image-section w-2/6 md:w-1/6 border-l dark:border-gray-700 ps-4 pe-4">
                                        <span className='text-xs text-[#6c757d] [writing-mode:vertical-lr] lg:[writing-mode:unset]'>Coursera IBM </span>
                                    </div>
                                    <div className="description-section md:w-4/6 lg:w-5/6">
                                        <h3 className="work-title text-xl">Meta Front-End Developer <small className='text-xs text-[#6c757d]'>Jan 9, 2023</small><span className='text-xs text-[#6c757d]'>-</span><small className='text-xs text-[#6c757d]'> Present</small></h3>
                                        <p>
                                            <small className="work-description">I write interesting guides on how to play, win, and strategize casino gameplays. Interesting topics I&apos;ve worked on include Getting The Best Out of an Online Bingo Site, How To Enjoy a Night of Playing Bingo, etc.</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="md:w-4/12 lg:w-3/12 mt-4 md:mt-0">
                        <div className="card mb-4 rounded-3 shadow-sm bg-ghost-white dark:bg-card-dark rounded-md ">
                            <div className="card-body">
                                <h2 className="card-title pricing-card-title">
                                    Pricing/Hour: <small className="text-muted fw-light">$15 USD</small></h2>
                                <ul className="list-unstyled border dark:border-gray-700 ml-2.5 marker:text-sky-400 list-disc py-3 ps-6 rounded-lg text-slate-400 text-base">
                                    <li><i className="bi bi-check-circle-fill text-success"></i>Front-end UI/UX Design</li>
                                    <li><i className="bi bi-check-circle-fill text-success"></i>Back-end Web Development</li>
                                    <li><i className="bi bi-check-circle-fill text-success"></i>Mobile App Development</li>
                                    <li><i className="bi bi-check-circle-fill text-success"></i>React &amp; NextJS Apps</li>
                                    <li><i className="bi bi-check-circle-fill text-success"></i>Laravel &amp; WordPress</li>
                                </ul>
                                <a href="mailto:content@alexmuiruri.com">
                                    <button type="button" className="w-full btn btn-sm btn-success mt-2">Contact Me</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact