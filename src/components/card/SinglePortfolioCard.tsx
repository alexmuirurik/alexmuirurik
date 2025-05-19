import React from 'react';
import ImageToast from '../toast/ImageToast';

const SinglePortfolioCard = ({portfolio}: {portfolio: any}) => {
    return (
        <div className="entry-content bg-black rounded-md pb-3">
            <div className="post-image rounded-md overflow-hidden">
                <ImageToast image={portfolio.featured_media} classList='w-full' />
            </div>
            <div className="content-wrapper rounded-md bg-ghost-white dark:bg-card-dark mx-1 px-2">
                <h2 className="pt-3 text-2xl font-bold mb-0">{portfolio.title.rendered}</h2>
                <ul className="list-disc p-3 px-4 space-y-1">
                    <li>
                        <span className='font-bold'>Portfolio Link: </span>
                        <a className='text-teal-500 ' target='_blank' href={portfolio.acf.portfolio_link}>
                            {portfolio.acf.portfolio_link}
                        </a>
                    </li>
                    <li>
                        <span className='font-bold'>GitHub Link: </span>
                        <a className='text-teal-500' target='_blank' href={portfolio.acf.github_link}>
                            {portfolio.acf.github_link ?? 'Contact Me For the Source Code'}
                        </a>
                    </li>
                </ul>
                <div className="content px-3" dangerouslySetInnerHTML={{ __html: portfolio.content.rendered }}>
                </div>
            </div>
        </div>
    );
}

export default SinglePortfolioCard;
