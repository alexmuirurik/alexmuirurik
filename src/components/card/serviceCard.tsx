import { Service } from '@/src/lib/services'

const ServiceCard = ({ service }: { service: Service }) => {
    return (
        <div className="w-full mb-4 md:w-[32%] rounded-md p-6 flex-shrink border border-gray-700">
            <div className="flex flex-col justify-center w-full">
                <div className="bg-white flex justify-center items-center border rounded-full p-3 h-14 w-14">
                    <service.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h2 className="my-2">{service.name}</h2>
                <p className="section-description text-sm text-gray-400">
                    {service.description}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard
