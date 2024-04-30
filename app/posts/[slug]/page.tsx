import React from 'react'
import SinglePostCard from '@/components/card/SinglePostCard'
import PostCard from '@/components/card/PostCard'
import { singlepost } from '@/utils/posts'

const page = async ({params}: {params: {slug: string}}) => {
	const req	= await singlepost(params.slug)
	const post	= await req.json()
	console.log(post[0])
	return (
		<div className="row mx-0 my-2">
			<div className="col md:w-9/12 px-0">
				{ (post[0]) && <SinglePostCard post={post[0]} />}
				<div className="comment content mt-4 rounded-3">
					<div className="content-comment ">
						<div className="col-lg-12">
							<div className="mt-5">
							</div>
						</div>

						<div className="mt-5">

						</div>
					</div>
					
				</div>
			</div>
			<div className="col md:w-3/12">
				<PostCard />
			</div>
		</div>
	)
}

export default page