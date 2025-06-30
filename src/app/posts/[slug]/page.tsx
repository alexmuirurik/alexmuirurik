import React from 'react'
import SinglePostCard from '@/src/components/card/SinglePostCard'
import PostCard from '@/src/components/card/PostCard'
import { getPosts } from '@/src/utils/posts'
import { notFound } from 'next/navigation'

const page = async ({ params }: { params: { slug: string } }) => {
    const posts = getPosts('posts')
    const singlePost = posts.find((post) => post.slug === params.slug)
    if (!singlePost) return notFound()

    return (
        <div className="main-wrapper container-fluid min-h-svh">
            <div className="md:flex gap-4 mt-4">
                <div className="md:w-9/12 ps-0 mb-4">
                    <SinglePostCard post={singlePost} />
                </div>
                <div className="md:w-3/12 md:pe-0">
                    <PostCard posts={posts} />
                </div>
            </div>
        </div>
    )
}

export default page
