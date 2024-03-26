'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const ImageToast = ({image}: any) => {
    const [imgSrc, setImgSrc] = useState(image);
    return (
        <Image 
            className='!relative aspect-video' 
            src={imgSrc} 
            alt="Shoes" 
            fill 
            onError={() => setImgSrc('/img/posts/loader.jpeg')}
        />
    )
}

export default ImageToast