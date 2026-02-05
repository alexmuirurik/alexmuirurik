import { siteMeta } from '@/src/lib/sitemeta'
import { CheckCheck } from 'lucide-react'

const Services = () => {
    return (
        <div className="bg-ghost-white dark:bg-card-dark w-full md:w-4/12 lg:w-3/12 rounded-md py-6 px-4">
            <h2 className="card-title">Services</h2>
            <p className="section-description text-sm text-gray-500">
                The key Services that I provide include:
            </p>
            <div className="card">
                <div className="card-body p-0">
                    <div className="list-group ">
                        <ul className="list-decimal">
                            {siteMeta.services.slice(0, 4).map((service) => {
                                return (
                                    <li
                                        className="flex gap-2 border-t dark:border-gray-700 font-bold py-3"
                                        key={service}
                                    >
                                        <CheckCheck
                                            className="text-sm text-teal-600"
                                            size={16}
                                        />
                                        <span className="text-sm text-gray-300">
                                            <span>{service}</span>
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
