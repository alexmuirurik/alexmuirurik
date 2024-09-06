
import React from 'react'
import ImageToast from '../toast/ImageToast'
import { wpPortfolio } from '@/utils/portfolio'
import { trimWords } from '@/utils/string'
import Link from 'next/link'

const PortfolioCard = async ({page}: {page: number}) => {
    const req = await wpPortfolio(page)
    const portfolio = await req.json()
    return portfolio.map( (portfolio: any) => 
        <div className="relative flex mb-4 h-full"  key={portfolio.id}>
            <div className="card border border-gray-700 rounded-md">
                <figure className='max-w-full border-b border-gray-700 overflow-hidden rounded-md'>
                    <ImageToast image={portfolio.featured_media} />
                </figure>
                <div className="card-body p-2">
                    <div className="relative h-4/5">
                        <h4 className="text-sm font-bold mb-1">
                            <Link href={portfolio.acf.portfolio_link} >
                                {portfolio.title.rendered}
                            </Link>
                        </h4>
                        <div className='text-xs text-gray-500' dangerouslySetInnerHTML={{__html: trimWords(portfolio.content.rendered, 20)}} />
                    </div>
                    <div className="flex justify-between">
                        <Link className='btn btn-sm btn-outline btn-primary rounded-md' href={portfolio.acf.portfolio_link} target='_blank' >
                            View Demo
                        </Link>
                        <Link className='btn btn-sm btn-outline btn-accent rounded-md' href='/contact' >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard