import PageHero from '@/components/template/PageHero';
import React from 'react';

const PortfolioPage = ({ params }: {params: { portfolio: string }}) => {
    const portfolioitem = params.portfolio
	console.log(params)
    return (
        <div className="main-wrapper min-h-svh">
			<PageHero pagename={portfolioitem} />
			<section className="dportfolio py-2 px-0 bg-transparent rounded-3">
				<div className="container-fluid md:p-0">
					
				</div>
			</section>
		</div>
    );
}

export default PortfolioPage;
