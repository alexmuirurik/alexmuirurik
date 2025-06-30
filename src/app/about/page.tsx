import PageHero from '@/src/components/template/PageHero'

const page = () => {
    return (
        <div className="main-wrapper min-h-svh">
            <PageHero pagename="Hire Me" />
            <section className="bg-white dark:bg-black">
                <div className="rounded-md flex-shrink m-auto bg-ghost-white dark:bg-card-dark">
                    <div className="entry-content p-4 px-8">
                        <p className="text-md mb-4 text-gray-600 dark:text-gray-400">
                            Wondering how to get started? Here&apos;s a simple
                            breakdown of the onboarding process:
                        </p>
                        <ol className="list-decimal list-inside mb-6">
                            <li className="mb-4">
                                <strong className="text-gray-800 dark:text-gray-200">
                                    Discovery Call
                                </strong>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    Send me an email at{' '}
                                    <a
                                        href="mailto:content@alexmuiruri.com"
                                        className="text-blue-500 hover:underline"
                                    >
                                        content@alexmuiruri.com
                                    </a>{' '}
                                    with your project details, requirements, or
                                    to request a paid test project. This helps
                                    us align on your needs right from the start.
                                    After your initial inquiry, we&apos;ll
                                    schedule a call to discuss your project in
                                    detail. This is your opportunity to share
                                    your vision and for me to ask questions that
                                    will help clarify the scope of work.
                                </p>
                            </li>
                            <li className="mb-4">
                                <strong className="text-gray-800 dark:text-gray-200">
                                    Proposal & Agreement
                                </strong>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    Based on our conversation, I&apos;ll provide
                                    a tailored proposal outlining the project
                                    scope, timeline, and budget. Once we agree
                                    on the terms, we&apos;ll formalize our
                                    partnership with a signed contract.
                                    We&apos;ll hold a kickoff meeting to
                                    establish communication channels, project
                                    milestones, and any tools we&apos;ll use
                                    throughout our collaboration.
                                </p>
                            </li>
                            <li className="mb-4">
                                <strong className="text-gray-800 dark:text-gray-200">
                                    Development Phase
                                </strong>
                                <p className="text-md text-gray-600 dark:text-gray-400">
                                    I&apos;ll start working on your project,
                                    providing regular updates and seeking your
                                    feedback to ensure we stay aligned with your
                                    goals. Before launch, I&apos;ll conduct
                                    thorough testing to ensure everything works
                                    perfectly. We&apos;ll launch your project
                                    and monitor it closely to address any
                                    immediate needs.
                                </p>
                            </li>
                        </ol>
                        <p className="text-md text-gray-600 dark:text-gray-400">
                            Looking forward to working together!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
