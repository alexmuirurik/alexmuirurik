import { siteMeta } from '@/src/lib/sitemeta'
import { Check, CheckCheck, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export const RenderProjects = () => {
    return (
        <ul className="list-decimal">
            {siteMeta.services.slice(0, 4).map((service) => {
                return (
                    <li
                        className="flex gap-2 border-t dark:border-gray-700 font-bold py-3"
                        key={service}
                    >
                        <CheckCheck
                            className="text-sm text-teal-600"
                            size={16}
                        />
                        <span className="text-sm text-gray-300">
                            <span>{service}</span>
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}
