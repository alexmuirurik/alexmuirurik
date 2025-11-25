import { siteMeta } from '@/src/lib/sitemeta'
import Projects from './projects'
import Image from 'next/image'

const Contact = () => {
    return (
        <section className="contact rounded-md mt-4 dark:bg-black bg-white">
            <div className="relative">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark rounded-md w-full md:w-8/12 lg:w-9/12 p-6 mb-4 md:mb-0">
                        <h2 className="card-title text-md mb-4">
                            Recent Clients
                        </h2>
                        <div className="card space-y-4">
                            {siteMeta.recentWork.map((work) => (
                                <div
                                    className="flex items-start gap-4"
                                    key={work.employer}
                                >
                                    <div className="bg-white rounded-md flex items-center justify-center px-8 py-4">
                                        <Image
                                            src={work.image}
                                            alt="sticky-eyes"
                                            width={50}
                                            height={50}
                                        />
                                    </div>
                                    <div className="flex flex-col items-start w-full">
                                        <div className="work-title text-xl border-b-0 cursor-pointer">
                                            <span className="text-lg text-gray-300 font-bold">
                                                {work.employer}
                                            </span>
                                            <small className="text-xs text-[#6c757d] m-2">
                                                {work.jobTitle}
                                            </small>
                                        </div>
                                        <small className="work-description">
                                            {work.description.map(
                                                (desc, idx) => (
                                                    <span
                                                        className="text-xs text-gray-400 my-1"
                                                        key={idx}
                                                    >
                                                        {desc}
                                                    </span>
                                                )
                                            )}
                                        </small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Projects />
                </div>
            </div>
        </section>
    )
}

export default Contact
