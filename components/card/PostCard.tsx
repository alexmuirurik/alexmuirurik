import React from 'react'
import posts from './../../records/posts.json'
import Link from 'next/link'
import ImageToast from '../toast/ImageToast'
import { truncate } from '@/db/helpers'

const PostCard = () => {
    return posts.map(post => 
        <div className="relative aspect-w-16 aspect-h-9 bg-transparent mb-4 basis-1/2" key={post.id}>
            <div className="card card-compact border dark:border-gray-700 rounded-md shadow-xl overflow-hidden">
                <figure className='max-w-full'>
                    <ImageToast image={post.featured_media} />
                </figure>
                <div className="card-body bg-ghost-white dark:bg-card-dark" >
                    <h2 className="card-title"><Link href={'/posts/'+post.slug}>{post.title.rendered} </Link></h2>
                    <div className="content" dangerouslySetInnerHTML={{__html: truncate(post.excerpt.rendered ) }}>

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default PostCard