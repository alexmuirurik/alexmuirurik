import PortfolioCard from '@/src/components/card/PortfolioCard'
import SinglePortfolioCard from '@/src/components/card/SinglePortfolioCard'
import { getPosts } from '@/src/utils/posts'
import { notFound } from 'next/navigation'

const PortfolioPage = async ({
    params,
}: {
    params: Promise<{ portfolio: string }>
}) => {
    const portfoli = getPosts('portfolio')
    const { portfolio } = await params
    const singlePortfolio = portfoli.find((p) => p.slug === portfolio)
    const newPortfoli = portfoli
        .filter((p) => p.slug !== portfolio)
        .slice(0, 12)
    if (!singlePortfolio) return notFound()

    return (
        <div className="main-wrapper container-fluid min-h-svh">
            <div className="md:flex gap-4 mt-4">
                <div className="md:w-9/12 ps-0 mb-4">
                    <SinglePortfolioCard portfolio={singlePortfolio} />
                </div>
                <div className="md:w-3/12 md:pe-0">
                    <PortfolioCard portfolio={newPortfoli} />
                </div>
            </div>
        </div>
    )
}

export default PortfolioPage
