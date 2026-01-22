import { getPosts } from '@/src/utils/posts'
import { Post } from '@/src/utils/types'
import Link from 'next/link'
import { Edit, Pen } from 'lucide-react'

export const RenderArticles = () => {
    const portfolio: Post[] = getPosts('portfolio')
    return (
        <ul className="list-decimal">
            {portfolio.slice(0, 5).map((portfolio) => {
                return (
                    <li
                        className="flex gap-2 border-t dark:border-gray-700 py-3"
                        key={portfolio.slug}
                    >
                        <Link
                            className="flex gap-2 items-center text-sm text-gray-300 font-bold mb-1"
                            href={'/posts/' + portfolio.slug}
                        >
                            <Edit className="text-sm text-teal-600" size={16} />
                            <span className="">
                                <span>
                                    {portfolio.metaData.title.substring(0, 30)}
                                </span>
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
