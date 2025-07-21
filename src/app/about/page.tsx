import PageHero from '@/src/components/template/PageHero'
import { getPageContent } from '@/src/utils/posts'
import ReactMarkDown from 'react-markdown'

const page = () => {
    const hireMe = getPageContent('hireme')
    return (
        <div className="main-wrapper min-h-svh">
            <PageHero pagename="Hire Me" />
            <section className="bg-white dark:bg-black">
                <div className="rounded-md flex-shrink m-auto bg-ghost-white dark:bg-card-dark">
                    <div className="markdown-content p-4 px-8">
                        <ReactMarkDown>{hireMe}</ReactMarkDown>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
