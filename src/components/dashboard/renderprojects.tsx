'use client'

import { siteMeta } from '@/src/lib/sitemeta'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const RenderProjects = () => {
    return (
        <Carousel plugins={[Autoplay()]}>
            <CarouselContent className="gap-4 ps-4 ">
                {siteMeta.recentWork.map((project) => (
                    <CarouselItem
                        key={project.name}
                        className="basis-1/2 border border-gray-600 rounded-md space-y-2 ps-0"
                    >
                        <div className="border-b border-gray-600 p-2">
                            <Image
                                className="!static rounded-md object-fill aspect-video"
                                src={project.image}
                                alt={project.name}
                                fill
                            />
                        </div>
                        <div className="py-2 px-4 space-y-1">
                            <span className="text-sm text-gray-400 font-bold">
                                {project.name}
                            </span>
                            {project.description.map((description) => (
                                <p
                                    key={description}
                                    className="text-xs text-gray-500"
                                >
                                    {description}
                                </p>
                            ))}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default RenderProjects
