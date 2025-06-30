import PortfolioCard from '@/src/components/card/PortfolioCard'
import SinglePortfolioCard from '@/src/components/card/SinglePortfolioCard'
import { getPosts } from '@/src/utils/posts'
import { notFound } from 'next/navigation'

const PortfolioPage = async ({ params }: { params: { portfolio: string } }) => {
    const portfolio = getPosts('portfolio')
    const singlePortfolio = portfolio.find(
        (portfolio) => portfolio.slug === params.portfolio
    )
    if (!singlePortfolio) return notFound()

    return (
        <div className="main-wrapper container-fluid min-h-svh">
            <div className="md:flex gap-4 mt-4">
                <div className="md:w-9/12 ps-0 mb-4">
                    <SinglePortfolioCard portfolio={singlePortfolio} />
                </div>
                <div className="md:w-3/12 md:pe-0">
                    <PortfolioCard portfolio={portfolio} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage
