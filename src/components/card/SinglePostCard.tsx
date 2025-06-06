import React from 'react'
import ImageToast from '../toast/ImageToast'
import { Post } from '@/src/utils/types'
import ReactMarkDown from 'react-markdown'
import { Avatar, AvatarImage } from '../ui/avatar'
import Image from 'next/image'
import { FaEye } from 'react-icons/fa'

const SinglePostCard = ({ post }: { post: Post }) => {
    return (
        <div className="entry-content bg-black rounded-md p-px">
            <div className="content-wrapper rounded-md bg-ghost-white dark:bg-card-dark m-1 p-6">
                <h2 className="text-4xl font-bold">{post.metaData.title}</h2>
                <div className="flex items-center gap-2 pt-2 pb-4">
                    <Avatar className="h-6 w-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>
                    <div className="flex items-center gap-2">
                        <span className="text-sm">by</span>
                        <span className="text-sm font-bold">Alex Muiruri</span>
                    </div>
                    <div className="flex items-center gap-2 ms-2">
                        <FaEye className="text-neutral-300 text-sm" />
                        <span className=" text-neutral-300 text-sm">5 minute Read</span>
                    </div>
                </div>
                <div className="post-image rounded-md overflow-hidden mb-4">
                    <Image
                        className="aspect-video rounded-lg w-full"
                        src={post.metaData.featuredImage as string}
                        alt={post.metaData.title}
                        height={700}
                        width={700}
                    />
                </div>
                <ReactMarkDown>{post.content}</ReactMarkDown>
            </div>
        </div>
    )
}

export default SinglePostCard
