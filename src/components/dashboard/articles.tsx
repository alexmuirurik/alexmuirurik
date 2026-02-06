import { RenderArticles } from './renderarticles'

const Articles = () => {
    return (
        <div className="bg-ghost-white dark:bg-card-dark w-full md:w-4/12 lg:w-3/12 rounded-md py-6 px-4">
            <h2 className="card-title">Articles</h2>
            <p className="section-description text-sm text-gray-500">
                Sample Articles I&apos;ve written before
            </p>
            <div className="card">
                <div className="card-body p-0 pt-2">
                    <div className="list-group ">
                        <RenderArticles />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles
