import Pagination from '@/src/components/card/Pagination'
import PostCard from '@/src/components/card/PostCard'
import PageHero from '@/src/components/template/PageHero'
import { getPosts } from '@/src/utils/posts'

const page = async ({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined }
}) => {
    const pgs = searchParams?.page ? Number(searchParams?.page) : 1
    const posts = getPosts('posts')

    return (
        <div className="main-wrapper container-fluid min-h-svh">
            <PageHero pagename="Blog Posts" />
            <section className="dportfolio py-2 px-0 bg-transparent rounded-3">
                <div className="container-fluid md:p-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch m-auto">
                        <PostCard posts={posts} />
                    </div>
                    <div className="join flex gap-4 justify-center  mt-8">
                        <Pagination pages={pgs} current={0} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page
