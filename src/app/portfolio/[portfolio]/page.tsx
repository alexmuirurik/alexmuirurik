import PortfolioCard from '@/src/components/card/PortfolioCard'
import SinglePortfolioCard from '@/src/components/card/SinglePortfolioCard'
import { getPosts } from '@/src/utils/posts'
import { notFound } from 'next/navigation'
import React from 'react'

const PortfolioPage = async ({ params }: { params: { slug: string } }) => {
    const portfolio = getPosts('posts')
    const singlePortfolio = portfolio.find((post) => post.slug === params.slug)
    if (!singlePortfolio) return notFound()

    return (
        <div className="main-wrapper container-fluid min-h-svh">
            <div className="row">
                <div className="col md:w-9/12 ps-0">
                    <SinglePortfolioCard portfolio={portfolio} />
                </div>
                <div className="col md:w-3/12 md:pe-0">
                    <PortfolioCard portfolio={portfolio}  />
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage
