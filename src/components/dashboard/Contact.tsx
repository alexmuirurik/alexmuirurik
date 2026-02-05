import Services from './services'
import RenderProjects from './renderprojects'

const Contact = () => {
    return (
        <section className="contact rounded-md mt-4 dark:bg-black bg-white">
            <div className="relative">
                <div className="md:flex md:columns-2 gap-4">
                    <div className="bg-ghost-white dark:bg-card-dark rounded-md w-full md:w-8/12 lg:w-9/12 p-6 mb-4 md:mb-0">
                        <h2 className="card-title text-md mb-4">
                            Recent Projects
                        </h2>
                        <RenderProjects />
                    </div>
                    <Services />
                </div>
            </div>
        </section>
    )
}

export default Contact
