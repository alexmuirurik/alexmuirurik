import Image from 'next/image'
import React from 'react'

const PortfolioCard = () => {
    return (
        <div className="relative aspect-w-16 aspect-h-9 bg-transparent mb-4">
            <div className="card image-full group rounded-md border bg-ghost-white dark:bg-card-dark dark:border-gray-700 overflow-hidden shadow-xl before:!rounded-md">
                <figure className='max-w-full z-30 group-hover:z-0'>
                    <Image className='!relative' src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" fill />
                </figure>
                <div className="card-body ease-in-out duration-600 cursor-pointer">
                    <h2 className="card-title">Shoes!</h2> 
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard