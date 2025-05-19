import ContactForm from '@/src/components/form/ContactForm'
import PageHero from '@/src/components/template/PageHero'

const page = () => {
	return (
		<div className='main-wrapper min-h-svh'>
			<PageHero pagename='Contact Me' />
			<section id="portfolio-details " className="portfolio-details bg-white dark:bg-black">
				<div className="container-fluid">
					<div className="card bg-ghost-white dark:bg-card-dark">
						<div className="card-body p-0">
							<ContactForm />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page