import Image from 'next/image'
import React from 'react'

const PostCard = () => {
    return (
        <div className="relative aspect-w-16 aspect-h-9 bg-transparent mb-4">
            <div className="card card-compact border dark:border-gray-700 rounded-md shadow-xl overflow-hidden">
                <figure className='max-w-full'>
                    <Image src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" fill className='!relative'/>
                </figure>
                <div className="card-body bg-ghost-white dark:bg-card-dark">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div> 
        </div>
    )
}

export default PostCard