import React from 'react'
import Link from 'next/link'
import ImageToast from '../toast/ImageToast'
import { wpPortfolio } from '@/utils/portfolio'
import { reduceWords } from '@/utils/string'

const PortfolioCard = async ({page}: {page: number}) => {
    const req = await wpPortfolio(page)
    const portfolio = await req.json()
    return portfolio.map( (portfolio: any) => 
        <div className="relative aspect-w-16 aspect-h-9 bg-transparent mb-4" key={portfolio.id}>
            <div className="card image-full group rounded-md border bg-ghost-white dark:bg-card-dark dark:border-gray-700 overflow-hidden shadow-xl before:!rounded-md">
                <figure className='max-w-full z-30 group-hover:z-0'>
                    <ImageToast image={portfolio.featured_media} />
                </figure>
                <div className="card-body ease-in-out duration-600 cursor-pointer">
                    <h2 className="card-title text-white">
                        {portfolio.title.rendered && reduceWords(portfolio.title.rendered.toString(), 34)} 
                    </h2> 
                    <div className='text-white text-md' dangerouslySetInnerHTML={
                        {__html: reduceWords(portfolio.excerpt.rendered, 150 ) }
                    }></div>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary" href={portfolio.acf.portfolio_link ?? '#'} target='_blank'>View Demo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard