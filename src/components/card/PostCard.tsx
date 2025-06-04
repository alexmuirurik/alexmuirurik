import React from 'react'
import Link from 'next/link'
import { blurImageData, reduceWords } from '@/src/utils/string'
import { Post } from '@/src/utils/types'
import Image from 'next/image'

const PostCard = async ({ posts }: { posts: Post[] }) => {
    return posts.map((post) => {
        return (
            <div className="relative flex mb-4 overflow-hidden" key={post.slug}>
                <div className="border dark:border-gray-700 rounded-md shadow-xl overflow-hidden">
                    <figure className="max-w-full">
                        <Image
                            className={'!relative aspect-video w-full '}
                            src={post.metaData.featuredImage ?? ''}
                            blurDataURL={blurImageData}
                            height={250}
                            width={300}
                            alt={post.metaData.title}
                        />
                    </figure>
                    <div className="bg-ghost-white dark:bg-card-dark p-3 space-y-3">
                        <Link
                            className="text-lg text-neutral-300"
                            href={'/posts/' + post.slug}
                        >
                            {reduceWords(post.metaData.title, 34)}
                        </Link>
                        <p className="text-sm text-gray-400">
                            {reduceWords(post.metaData.description, 100)}
                        </p>
                    </div>
                </div>
            </div>
        )
    })
}

export default PostCard
