import PortfolioCard from '@/components/card/PortfolioCard';
import SinglePortfolioCard from '@/components/card/SinglePortfolioCard';
import { singlePortfolio } from '@/utils/portfolio';
import React from 'react';

const PortfolioPage = async ({ params }: { params: { portfolio: string } }) => {
	const portfolioitem = params.portfolio
	const req = await singlePortfolio(params.portfolio)
	const portfolio = await req.json()
	return (
		<div className="main-wrapper container-fluid min-h-svh">
			<div className="row">
				<div className="col md:w-9/12 ps-0">
					{(portfolio[0]) && <SinglePortfolioCard portfolio={portfolio[0]} />}
				</div>
				<div className="col md:w-3/12 md:pe-0">
					<PortfolioCard page={1} />
				</div>
			</div>
		</div>
	);
}

export default PortfolioPage;
