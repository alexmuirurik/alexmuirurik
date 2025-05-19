import PageHero from '@/src/components/template/PageHero'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='main-wrapper min-h-svh'>
			<PageHero pagename='404 | Page Not Found' />
			<section id="portfolio-details" className="portfolio-details !px-0 pt-0 bg-white dark:bg-black">
				<div className="container-fluid mt-0">
					<div className="row">
						<div className="col rounded-md flex-shrink m-auto px-0 bg-ghost-white dark:bg-card-dark w-full">
							<div className="entry-content p-4 px-8">
								<p className='text-md'>{'I\'m Sorry. The URL that you\'re looking for does not exist on our server'}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
    )
}