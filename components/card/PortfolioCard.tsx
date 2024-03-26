import React from 'react'
import Image from 'next/image'
import portfolio from './../../records/projects.json'
import Link from 'next/link'
import ImageToast from '../toast/ImageToast'

const PortfolioCard = () => {
    return portfolio.map( portfolio => 
        <div className="relative aspect-w-16 aspect-h-9 bg-transparent mb-4" key={portfolio.id}>
            <div className="card image-full group rounded-md border bg-ghost-white dark:bg-card-dark dark:border-gray-700 overflow-hidden shadow-xl before:!rounded-md">
                <figure className='max-w-full z-30 group-hover:z-0'>
                    <ImageToast image={portfolio.image} />
                </figure>
                <div className="card-body ease-in-out duration-600 cursor-pointer">
                    <h2 className="card-title text-white">{portfolio.title}</h2> 
                    <p className='text-white text-md'>{portfolio.description}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary" href={portfolio.demo} target='_blank'>View Demo</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard