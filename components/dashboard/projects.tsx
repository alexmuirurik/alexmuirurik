import React from 'react';
import { wpPortfolio } from '@/utils/portfolio';
import Image from 'next/image';
import ImageToast from '../toast/ImageToast';
import Link from 'next/link';


const Projects = async () => {
    const req = await wpPortfolio(1)
    const portfoli = await req.json()
    const RenderPortfolio = () => portfoli.map((portfolio:any, index: any) => {
        if(index > 3) return
        return <div className="flex gap-2 border-t dark:border-gray-700 pt-4" key={portfolio.id}>
            <div className="side w-8 h-8 border border-gray-700 rounded-full p-1">
                <ImageToast classList='rounded-full' image={portfolio.featured_media} />
            </div>
            <div className="aside">
                <h3 className='text-sm text-gray-300 font-bold mb-1'> 
                    <Link href={'/portfolio/' + portfolio.slug} target="_blank">{portfolio.title.rendered}</Link>
                </h3>
                <p className='text-sm text-gray-400'>
                    <span>With: <small>React, TheMovieDB</small></span>
                </p>
            </div>
        </div>
    })
    return (
        <div className="bg-ghost-white dark:bg-card-dark w-full md:w-4/12 lg:w-3/12 rounded-md py-6 px-4">
            <h2 className="card-title">Projects</h2>
            <p className="section-description text-sm">Sample Projects I&apos;ve worked on before</p>
            <div className="card">
                <div className="card-body p-0 pt-2">
                    <div className="list-group ">
                        <RenderPortfolio />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
