import { RenderProjects } from './renderprojects'

const Projects = () => {
    return (
        <div className="bg-ghost-white dark:bg-card-dark w-full md:w-4/12 lg:w-3/12 rounded-md py-6 px-4">
            <h2 className="card-title">Services</h2>
            <p className="section-description text-sm text-gray-500">
                The key Services that I provide include:
            </p>
            <div className="card">
                <div className="card-body p-0">
                    <div className="list-group ">
                        <RenderProjects />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
