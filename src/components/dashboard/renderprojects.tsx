import { siteMeta } from '@/src/lib/sitemeta'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const RenderProjects = () => {
    return (
        <ul className="list-decimal">
            {siteMeta.projects.slice(0, 6).map((portfolio) => {
                return (
                    <li
                        className="flex gap-2 border-t dark:border-gray-700 py-3"
                        key={portfolio.link}
                    >
                        <Link
                            className="flex gap-2 items-center text-sm text-gray-300 font-bold mb-1"
                            href={portfolio.link}
                            target="_blank"
                        >
                            <ExternalLink
                                className="text-sm text-teal-600"
                                size={16}
                            />
                            <span className="">
                                <span>{portfolio.name}</span>
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}
