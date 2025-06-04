import React from 'react'
import ImageToast from '../toast/ImageToast'
import { Post } from '@/src/utils/types'
import ReactMarkDown from 'react-markdown'

const SinglePostCard = ({ post }: { post: Post }) => {
    return (
        <div className="entry-content bg-black rounded-md pb-3">
            <div className="post-image rounded-md overflow-hidden">
                <ImageToast
                    image={post.metaData.featuredImage}
                    classList="w-full"
                />
            </div>
            <div className="content-wrapper rounded-md bg-ghost-white dark:bg-card-dark mx-1 px-2">
                <div className="pt-3 ">
                    <h2 className="text-4xl font-bold">
                        {post.metaData.title}
                    </h2>
                </div>
                <ReactMarkDown>{post.content}</ReactMarkDown>
            </div>
        </div>
    )
}

export default SinglePostCard
