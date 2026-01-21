import PageHero from '@/src/components/template/PageHero'
import PortfolioCard from '@/src/components/card/PortfolioCard'
import Pagination from '@/src/components/card/Pagination'
import { getPosts } from '@/src/utils/posts'

const page = async ({
    searchParams,
}: {
    searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    const search = await searchParams
    const pgs = search?.page ? Number(search?.page) : 1
    const portfolio = getPosts('portfolio')
    const tPages = Math.round(portfolio.length / 12)
    const pageResults = tPages > pgs ? portfolio.slice(pgs * 12 - 12, pgs * 12) : portfolio
    
    return (
        <div className="main-wrapper min-h-svh">
            <PageHero pagename="Portfolio" />
            <section className="dportfolio py-2 px-0 bg-transparent rounded-3">
                <div className="container-fluid md:p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 m-auto">
                        <PortfolioCard portfolio={pageResults} />
                    </div>
                    <div className="flex items-center justify-center gap-8">
                        <Pagination pages={tPages} current={pgs} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
