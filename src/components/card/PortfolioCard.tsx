import React from 'react'
import ImageToast from '../toast/ImageToast'
import { trimWords } from '@/src/utils/string'
import Link from 'next/link'
import { Post } from '@/src/utils/types'

const PortfolioCard = async ({ portfolio }: { portfolio: Post[] }) => {
    return portfolio.map((portfolio) => (
        <div className="relative flex mb-4" key={portfolio.slug}>
            <div className="card border border-gray-700 rounded-md">
                <figure className="max-w-full border-b border-gray-700 overflow-hidden rounded-md">
                    <ImageToast
                        image={portfolio.metaData.featuredImage}
                        classList="w-full"
                    />
                </figure>
                <div className="card-body p-2">
                    <div className="relative h-4/5">
                        <h4 className="text-sm font-bold mb-1">
                            <Link
                                className="text-base text-neutral-300"
                                href={'/portfolio/' + portfolio.slug}
                            >
                                {portfolio.metaData.title}
                            </Link>
                        </h4>
                        <p className="text-xs text-gray-500 ">
                            {portfolio.metaData.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default PortfolioCard
