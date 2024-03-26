import React from 'react'
import PageHero from '@/components/template/PageHero'
import PortfolioCard from '@/components/card/PortfolioCard'

const page = () => {
	return (
		<div className="main-wrapper min-h-svh">
			<PageHero pagename='Portfolio' />
			<section className="dportfolio py-2 px-0 bg-transparent rounded-3">
				<div className="container-fluid md:p-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-auto">
						<PortfolioCard />
					</div>
					<div className="join flex justify-center mt-8">
						<button className="join-item btn">1</button>
						<button className="join-item btn">2</button>
						<button className="join-item btn btn-disabled">...</button>
						<button className="join-item btn">99</button>
						<button className="join-item btn">100</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page