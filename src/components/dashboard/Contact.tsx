import { siteMeta } from '@/src/lib/sitemeta'
import Articles from './articles'

const Contact = () => {
    return (
        <section className="contact rounded-md mt-4 dark:bg-black bg-white">
            <div className="relative">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark rounded-md w-full md:w-8/12 lg:w-9/12 p-6 mb-4 md:mb-0">
                        <h2 className="card-title text-md mb-4">
                            Work Experience
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
                                        <small className="work-description">
                                            {work.description.map(
                                                (desc, idx) => (
                                                    <li className="text-xs text-gray-400 my-1" key={idx}>
                                                        {desc}
                                                    </li>
                                                )
                                            )}
                                        </small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Articles />
                </div>
            </div>
        </section>
    )
}

export default Contact
