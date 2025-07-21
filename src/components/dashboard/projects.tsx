import ImageToast from '../toast/ImageToast'
import Link from 'next/link'
import { getPosts } from '@/src/utils/posts'
import { Post } from '@/src/utils/types'

const Projects = async () => {
    const portfoli: Post[] = getPosts('portfolio')
    const RenderPortfolio = () => {
        return portfoli.slice(0, 4).map((portfolio) => {
            return (
                <div
                    className="flex gap-2 border-t dark:border-gray-700 pt-4"
                    key={portfolio.slug}
                >
                    <div className="side w-8 h-8 border border-gray-700 rounded-full p-1">
                        <ImageToast
                            classList="rounded-full"
                            image={portfolio.metaData.featuredImage}
                        />
                    </div>
                    <div className="aside">
                        <h3 className="text-sm text-gray-300 font-bold mb-1">
                            <Link href={'/portfolio/' + portfolio.slug}>
                                {portfolio.metaData.title}
                            </Link>
                        </h3>
                        <p className="text-sm text-gray-400 space-x-1">
                            <span>With:</span>
                            <small>{portfolio.metaData.techStack}</small>
                        </p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="bg-ghost-white dark:bg-card-dark w-full md:w-4/12 lg:w-3/12 rounded-md py-6 px-4">
            <h2 className="card-title">Projects</h2>
            <p className="section-description text-sm">
                Sample Projects I&apos;ve worked on before
            </p>
            <div className="card">
                <div className="card-body p-0 pt-2">
                    <div className="list-group ">
                        <RenderPortfolio />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
