import React from 'react'
import PostCard from '@/components/card/PostCard'
import PageHero from '@/components/template/PageHero'
import { wpposts } from '@/utils/posts'
import Pagination from '@/components/card/Pagination'


const page = async ( {searchParams}: {searchParams?: { [key: string]: string | string[] | undefined } }) => {
	const pgs = (searchParams?.page) ? Number(searchParams?.page) : 1 
	const req = await wpposts(pgs)
	const hdr = req.headers
 	return (
		<div className="main-wrapper container-fluid min-h-svh">
			<PageHero pagename='Blog Posts' />
			<section className="dportfolio py-2 px-0 bg-transparent rounded-3">
				<div className="container-fluid md:p-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-stretch m-auto">
						<PostCard page={pgs} />
					</div>
					<div className="join flex gap-4 justify-center mt-8">
						<Pagination hdr={hdr} />
					</div>
				</div>
			</section>
		</div>
	)
}

export default page