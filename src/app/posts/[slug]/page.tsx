import React from 'react'
import SinglePostCard from '@/src/components/card/SinglePostCard'
import PostCard from '@/src/components/card/PostCard'
import { singlepost } from '@/src/utils/posts'

const page = async ({params, searchParams}: {params: {slug: string}, searchParams?: { [key: string]: string | string[] | undefined } }) => {
	const pgs = (searchParams?.page) ? Number(searchParams?.page) : 1 
	const req	= await singlepost(params.slug)
	const post	= await req.json()
	return (
		<div className="main-wrapper container-fluid min-h-svh">
			<div className="row">
				<div className="col md:w-9/12 ps-0">
					{ (post[0]) && <SinglePostCard post={post[0]} />}
				</div>
				<div className="col md:w-3/12 md:pe-0">
					<PostCard page={pgs} />
				</div>
			</div>
		</div>
	)
}

export default page