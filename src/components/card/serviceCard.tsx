import { Service } from '@/src/lib/services'

const ServiceCard = ({ service }: { service: Service }) => {
    return (
        <div className="bg-ghost-white dark:bg-card-dark w-full mb-4 md:w-[32%] rounded-md py-6 px-4 flex-shrink border border-gray-700">
            <div className="flex flex-col justify-center items-center w-full">
                <service.icon className="h-20 w-20 text-gray-400" />
                <h2 className="card-title my-2">{service.name}</h2>
                <div className="w-10/12 text-center">
                    <p className="section-description text-sm text-gray-400">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
