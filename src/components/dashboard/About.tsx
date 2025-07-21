import Image from 'next/image'
import React from 'react'
import Projects from './projects'
import { siteMeta } from '@/src/lib/sitemeta'

const About = () => {
    return (
        <section
            className="about mt-4 rounded-md dark:bg-black bg-white"
            id="about"
        >
            <div className="">
                <div className="md:flex md:column-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark w-full md:w-8/12 lg:w-9/12 rounded-md p-6 mb-4 md:mb-0">
                        <h2 className="card-title">About Me</h2>
                        <div
                            className="card"
                            dangerouslySetInnerHTML={{
                                __html: siteMeta.aboutMe,
                            }}
                        />
                    </div>
                    <Projects />
                </div>
            </div>
        </section>
    )
}

export default About
