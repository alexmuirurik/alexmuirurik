import PageHero from '@/components/template/PageHero'
import React from 'react'

const page = () => {
	return (
		<div className='main-wrapper min-h-svh'>
			<PageHero pagename='Hire Me' />
			<section id="portfolio-details" className="portfolio-details !px-0 pt-0 bg-white dark:bg-black">
				<div className="container-fluid mt-0">
					<div className="row">
						<div className="col rounded-md flex-shrink m-auto px-0 bg-ghost-white dark:bg-card-dark">
							<div className="entry-content p-4 px-8">
								<p className='text-md'>Thank you for choosing to work with me. Wondering how to get started?</p>
								<p className='text-md'><strong>This is how it works</strong>:</p>
								<p className='text-md'>First, you send an email with your content requirements and/or request a <a href="https://alexmuiruri.com/order-content/">paid test article</a>. 
									If you think I&apos;m a good fit, after receiving the test article, you request up to 5, 1500-word articles to be completed that week.
								</p>
								<p className='text-md'>I like to receive weekly content orders so I can organize my calendar well. If you&apos;re sending work on Wednesday, send a batch that 
									I&apos;ll do on Thursday and Friday.
								</p>
								<p className='text-md'>But if you&apos;re sending a content order on Friday, send a batch that I&apos;ll do the following week. If you want, you can also send a 
									batch for an entire month so I can set up my calendar.
								</p>
								<p className='text-md'>Ready to place your next order? <a href="https://alexmuiruri.com/order-content/">Go here</a> to request a paid test article or 
									contact me at content@alexmuiruri.com to place an order for the week or the month. Have fun!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default page