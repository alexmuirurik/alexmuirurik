import { getPosts } from '@/src/utils/posts'
import { Post } from '@/src/utils/types'
import ImageToast from '../toast/ImageToast'
import Link from 'next/link'

export const RenderPortfolio = () => {
    const portfolio: Post[] = getPosts('portfolio')
    return portfolio.slice(0, 4).map((portfolio) => {
        return (
            <div
                className="flex gap-2 border-t dark:border-gray-700 pt-4"
                key={portfolio.slug}
            >
                <div className="side w-8 h-8 border border-gray-700 rounded-full p-1">
                    <ImageToast
                        className="rounded-lg"
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
