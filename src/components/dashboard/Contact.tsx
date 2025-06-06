import React from 'react'

const Contact = () => {
    return (
        <section className="contact rounded-md mt-4 dark:bg-black bg-white">
            <div className="relative">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark rounded-md w-full md:w-8/12 lg:w-9/12 p-6 mb-4 md:mb-0">
                        <h2 className="card-title text-md mb-4">
                            Recent Work:
                        </h2>
                        <div className="card">
                            <div className="work flex mb-4">
                                <div className="image-section w-2/6 md:w-1/6 border-l dark:border-gray-700 ps-4 pe-4">
                                    <span className="text-xs text-[#6c757d] [writing-mode:vertical-lr] lg:[writing-mode:unset]">
                                        NetraScale
                                    </span>
                                </div>
                                <div className="description-section md:w-4/6 lg:w-5/6">
                                    <h3 className="work-title text-xl border-b-0">
                                        Full Stack Javascript Developer
                                        <small className="text-xs text-[#6c757d] ms-2">
                                            Sep 2, 2023
                                        </small>
                                        <span className="text-xs text-[#6c757d]">
                                            -
                                        </span>
                                        <small className="text-xs text-[#6c757d]">
                                            Present
                                        </small>
                                    </h3>
                                    <p>
                                        <small className="work-description">
                                            I create a full-stack web
                                            application using React/NextJS,
                                            PostgreSQL, and ShadCN. I&apos;ve
                                            also created APIs to support mobile
                                            payments etc...
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="work flex mb-4">
                                <div className="image-section w-2/6 md:w-1/6 border-l dark:border-gray-700 ps-4 pe-4">
                                    <span className="text-xs text-[#6c757d] [writing-mode:vertical-lr] lg:[writing-mode:unset]">
                                        StickyEyes
                                    </span>
                                </div>
                                <div className="description-section md:w-4/6 lg:w-5/6">
                                    <h3 className="work-title text-xl border-b-0">
                                        Freelance Casino Writer
                                        <small className="text-xs text-[#6c757d] ms-2">
                                            Jan 9, 2023
                                        </small>
                                        <span className="text-xs text-[#6c757d]">
                                            -
                                        </span>
                                        <small className="text-xs text-[#6c757d]">
                                            {' '}
                                            Present
                                        </small>
                                    </h3>
                                    <p>
                                        <small className="work-description">
                                            {
                                                'I write interesting guides on how to play, win, and strategize casino gameplays. '
                                            }
                                            {
                                                "Interesting topics I've worked on include 'Getting The Best Out of an Online Bingo Site', "
                                            }
                                            {
                                                "'How To Enjoy a Night of Playing Bingo', etc."
                                            }
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-ghost-white dark:bg-card-dark rounded-md w-full md:w-4/12 lg:w-3/12 py-6 px-4">
                        <h2 className="card-title pricing-card-title">
                            Services:
                        </h2>
                        <div className="card py-0">
                            <div className="card-body px-0">
                                <ul className="list-unstyled border dark:border-gray-700 ml-2.5 marker:text-sky-400 list-disc py-3 ps-6 rounded-lg text-slate-400 space-y-2 text-sm">
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success"></i>
                                        UI/UX Web Design
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success"></i>
                                        Full-stack Web Development
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success"></i>
                                        React/Javascript Development
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success"></i>
                                        Mobile App Development
                                    </li>
                                    <li>
                                        <i className="bi bi-check-circle-fill text-success"></i>
                                        Technical/Software Writing
                                    </li>
                                </ul>
                                <a
                                    href="mailto:content@alexmuiruri.com"
                                    className="mt-4"
                                >
                                    <button
                                        type="button"
                                        className="bg-teal-600 hover:bg-teal-500 border border-teal-500 rounded-lg w-full text-center px-4 py-2 mt-2"
                                    >
                                        Contact Me
                                    </button>
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
