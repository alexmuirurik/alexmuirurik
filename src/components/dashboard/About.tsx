import { getPageContent } from '@/src/utils/posts'
import ReactMarkDown from 'react-markdown'
import Articles from './articles'
import Link from 'next/link'

const About = () => {
    const aboutMe = getPageContent('about')
    
    return (
        <section
            className="about mt-4 rounded-md dark:bg-black bg-white"
            id="about"
        >
            <div className="">
                <div className="md:flex md:column-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark w-full md:w-8/12 lg:w-9/12 rounded-md p-6 mb-4 md:mb-0">
                        <h2 className="card-title">About Me</h2>
                        <div className="card">
                            <div className="card-body markdown-content text-gray-300">
                                <ReactMarkDown>{aboutMe}</ReactMarkDown>
                                <div className="flex items-center gap-16 mt-6">
                                    <Link
                                        href="/contact"
                                        className="bg-teal-700 hover:bg-teal-600 rounded-lg px-12 py-3"
                                    >
                                        <span className='text-neutral-100'>Contact Me</span>
                                    </Link>
                                    <Link
                                        href="/assets/doc/Resume-Alex-Muiruri.pdf"
                                        className="bg-sky-900 hover:bg-sky-800 rounded-lg px-12 py-3"
                                        target='_blank'
                                    >
                                        <span className='text-neutral-100'>My Resume</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Articles />
                </div>
            </div>
        </section>
    )
}

export default About
