import React from 'react'
import PageHero from '@/components/template/PageHero'
import PortfolioCard from '@/components/card/PortfolioCard'
import { wpPortfolio } from '@/utils/portfolio'
import Pagination from '@/components/card/Pagination'

export const dynamic = 'force-dynamic'
const page = async ( {searchParams}: {searchParams?: { [key: string]: string | string[] | undefined } }) => {
	const pgs = (searchParams?.page) ? Number(searchParams?.page) : 1 
	const req = await wpPortfolio(pgs)
	const hdr = req.headers
	return (
		<div className="main-wrapper min-h-svh">
			<PageHero pagename='Portfolio' />
			<section className="dportfolio py-2 px-0 bg-transparent rounded-3">
				<div className="container-fluid md:p-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-auto">
						<PortfolioCard page={pgs} />
					</div>
					<div className="join flex justify-center mt-8">
						<Pagination hdr={hdr} />
					</div>
				</div>
			</section>
		</div>
	)
}

export default page