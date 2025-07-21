import { siteMeta } from '@/src/lib/sitemeta'
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
                        <div className="card space-y-4">
                            {siteMeta.recentWork.map((work) => (
                                <div className="flex gap-2" key={work.employer}>
                                    <div className="border-l dark:border-gray-700 px-8 py-4">
                                        <span className="text-xs text-[#6c757d] [writing-mode:vertical-lr]">
                                            {work.employer}
                                        </span>
                                    </div>
                                    <div className="description-section">
                                        <h3 className="work-title text-xl border-b-0">
                                            {work.jobTitle}
                                            <small className="text-xs text-[#6c757d] ms-2">
                                                {work.start}
                                            </small>
                                            <span className="text-xs text-[#6c757d]">
                                                -
                                            </span>
                                            <small className="text-xs text-[#6c757d]">
                                                {work.end}
                                            </small>
                                        </h3>
                                        <p>
                                            <small className="work-description">
                                                {work.description}
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-ghost-white dark:bg-card-dark rounded-md w-full md:w-4/12 lg:w-3/12 py-6 px-4">
                        <h2 className="card-title pricing-card-title">
                            Services:
                        </h2>
                        <div className="card py-0">
                            <div className="card-body px-0">
                                <ul className="list-unstyled border dark:border-gray-700 ml-2.5 marker:text-sky-400 list-disc py-3 ps-6 rounded-lg text-slate-400 space-y-2 text-sm">
                                    {siteMeta.services.map((service) => (
                                        <li key={service}>
                                            <i className="bi bi-check-circle-fill text-success"></i>
                                            {service}
                                        </li>
                                    ))}
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
