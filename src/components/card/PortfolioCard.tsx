import React from 'react'
import ImageToast from '../toast/ImageToast'
import { wpPortfolio } from '@/src/utils/portfolio'
import { trimWords } from '@/src/utils/string'
import Link from 'next/link'

const PortfolioCard = async ({ page }: { page: number }) => {
    const req = await wpPortfolio(page)
    const portfolio = await req.json()
    return portfolio.map((portfolio: any) => (
        <div className="relative flex mb-4" key={portfolio.id}>
            <div className="card border border-gray-700 rounded-md">
                <figure className="max-w-full border-b border-gray-700 overflow-hidden rounded-md">
                    <ImageToast
                        image={portfolio.featured_media}
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
                                {portfolio.acf.name}
                            </Link>
                        </h4>
                        <p className="text-xs text-gray-500 ">
                            {portfolio.acf.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ))
}

export default PortfolioCard
