'use client'
import { blurImageData, reduceWords } from '@/src/utils/string'
import Link from 'next/link'
import { Post } from '@/src/utils/types'
import Image from 'next/image'

const PortfolioCard = async ({ portfolio }: { portfolio: Post[] }) => {
    return portfolio.map((portfolio) => (
        <div
            className="relative flex mb-4 overflow-hidden w-full"
            key={portfolio.slug}
        >
            <div className="border dark:border-gray-700 rounded-md shadow-xl overflow-hidden w-full">
                <figure className="max-w-full">
                    <Image
                        className={'!relative aspect-video w-full '}
                        src={portfolio.metaData.featuredImage ?? ''}
                        blurDataURL={blurImageData}
                        height={250}
                        width={300}
                        alt={portfolio.metaData.title}
                    />
                </figure>
                <div className="bg-ghost-white dark:bg-card-dark p-3 space-y-2">
                    <Link
                        className="text-neutral-300"
                        href={'/portfolio/' + portfolio.slug}
                    >
                        {reduceWords(portfolio.metaData.title, 34)}
                    </Link>
                    <p className="text-sm text-gray-400">
                        {reduceWords(portfolio.metaData.description, 100)}
                    </p>
                </div>
            </div>
        </div>
    ))
}

export default PortfolioCard
