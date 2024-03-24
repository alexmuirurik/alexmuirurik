import PortfolioCard from '@/components/card/PortfolioCard'
import PageHero from '@/components/template/PageHero'
import React from 'react'

const page = () => {
	return (
		<div className="main-wrapper min-h-svh">
			<PageHero pagename='Portfolio' />
			<section className="dportfolio py-2 px-0 bg-transparent rounded-3">
				<div className="container-fluid md:p-0">
					<div className="relative columns-1 sm:columns-2 lg:columns-3 gap-4 m-auto">
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
						<PortfolioCard />
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