import React from 'react'
import * as posts from './../../../records/posts.json'
import SinglePostCard from '@/components/card/SinglePostCard'

const page = ({params}: {params: {slug: string}}) => {
	const post = posts.find(post => post.slug === params.slug)
	return (
		<div className="row mx-0 my-2">
			<div className="col md:w-9/12 px-0">
				{ (post) && <SinglePostCard post={post} />}
				<div className="comment content mt-4 rounded-3">
					<div className="content-comment">
						<div className="col-lg-12">
							<div className="mt-5">
							</div>
						</div>

						<div className="mt-5">

						</div>
					</div>
					<div className="col md:w-3/12">

					</div>
				</div>
			</div>
		</div>
	)
}

export default page