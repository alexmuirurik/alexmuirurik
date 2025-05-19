import React from 'react'
import ImageToast from '../toast/ImageToast'

const SinglePostCard = ({post}:any) => {
    return (
        <div className="entry-content bg-black rounded-md pb-3">
            <div className="post-image rounded-md overflow-hidden">
                <ImageToast image={post.featured_media} classList='w-full' />
            </div>
            <div className="content-wrapper rounded-md bg-ghost-white dark:bg-card-dark mx-1 px-2">
                <div className="pt-3 ">
                    <h2 className="text-4xl font-bold">{post.title.rendered}</h2>
                </div>
                <div className="content p-3" dangerouslySetInnerHTML={{ __html: post.content.rendered }}>
                    
                </div>
            </div>
        </div>
    )
}

export default SinglePostCard