import ServiceCard from '@/src/components/card/serviceCard'
import PageHero from '@/src/components/template/PageHero'
import { services } from '@/src/lib/services'

const page = () => {
    return (
        <div className="main-wrapper min-h-svh">
            <PageHero pagename="Services" />
            <section className="bg-transparent">
                <div className="md:flex justify-between md:column-2 gap-4 flex-wrap">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default page
