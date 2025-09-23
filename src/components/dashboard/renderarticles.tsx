import { getPosts } from '@/src/utils/posts'
import { Post } from '@/src/utils/types'
import { ExternalLink } from 'lucide-react'
import Link  from 'next/link'

export const RenderArticles = () => {
    const portfolio: Post[] = getPosts('portfolio')
    return (
        <ul className='list-decimal'>
            {portfolio.slice(0, 6).map((portfolio) => {
                return (
                    <li
                        className="flex gap-2 border-t dark:border-gray-700 py-3"
                        key={portfolio.slug}
                    >
                        <Link
                            className="flex gap-2 items-center text-sm text-gray-300 font-bold mb-1"
                            href={'/portfolio/' + portfolio.slug}
                            target="_blank"
                        >
                            <ExternalLink className='text-sm text-teal-600' size={16}/>
                            <span>{portfolio.metaData.description.substring(0, 30)}</span>
                            
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
