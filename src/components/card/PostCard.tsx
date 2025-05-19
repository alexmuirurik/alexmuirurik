import React from 'react'
import Link from 'next/link'
import ImageToast from '../toast/ImageToast'
import { wpposts } from '@/src/utils/posts'
import { reduceWords } from '@/src/utils/string'

const PostCard = async ({ page }: { page: number }) => {
    const req = await wpposts(page)
    const posts = await req.json()
    return posts.map((post: any) => {
        return (
            <div className="relative flex mb-4 overflow-hidden" key={post.id}>
                <div className="border dark:border-gray-700 rounded-md shadow-xl overflow-hidden">
                    <figure className="max-w-full">
                        <ImageToast image={post.featured_media} />
                    </figure>
                    <div className="bg-ghost-white dark:bg-card-dark p-3 space-y-3">
                        <Link
                            className="text-lg text-neutral-300"
                            href={'/posts/' + post.slug}
                        >
                            {post.title.rendered &&
                                reduceWords(post.title.rendered.toString(), 34)}
                        </Link>
                        <div
                            className="text-sm text-gray-400"
                            dangerouslySetInnerHTML={{
                                __html: reduceWords(post.excerpt.rendered, 100),
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        )
    })
}

export default PostCard
