import { Post } from '@/src/utils/types'
import ReactMarkDown from 'react-markdown'
import { Avatar, AvatarImage } from '../ui/avatar'
import { FaEye } from 'react-icons/fa'
import Image from 'next/image'

const SinglePortfolioCard = ({ portfolio }: { portfolio: Post }) => {
    const minutes = portfolio.content.split(' ').length / 200
    return (
        <div className="markdown-content bg-black rounded-md p-px">
            <div className="content-wrapper rounded-md bg-ghost-white dark:bg-card-dark m-1 p-6">
                <h2 className="text-4xl font-bold border-b-0">
                    {portfolio.metaData.title}
                </h2>
                <div className="flex items-center gap-2 pt-2 pb-4">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="/img/home/alexmuiruri.jpg" />
                    </Avatar>
                    <div className="flex items-center gap-1">
                        <span className="text-sm text-neutral-400">by</span>
                        <span className="text-sm font-bold text-neutral-400">Alex Muiruri</span>
                    </div>
                    <div className="flex items-center gap-2 ms-2">
                        <FaEye className="text-sm" />
                        <span className=" text-neutral-400 text-sm">
                            {minutes.toFixed(0)} minute Read
                        </span>
                    </div>
                </div>
                <div className="portfolio-image rounded-md overflow-hidden mb-4">
                    <Image
                        className="aspect-video rounded-lg w-full"
                        src={portfolio.metaData.featuredImage as string}
                        alt={portfolio.metaData.title}
                        height={700}
                        width={700}
                    />
                </div>
                <ReactMarkDown>{portfolio.content}</ReactMarkDown>
            </div>
        </div>
    )
}

export default SinglePortfolioCard
