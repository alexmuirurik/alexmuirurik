import Image from 'next/image'
import React, { useState } from 'react'

const ImageToast = async ({image, classList}: {image: any, classList?: string | undefined }) => {
    const req = await fetch('https://resume.alexmuiruri.com/wp-json/wp/v2/media/'+image)
    const img = await req.json()
    return (
        <Image className={'!relative aspect-video w-full ' + classList} src={img.media_details.sizes.medium_large.source_url} alt="Shoes" fill />
    )
}

export default ImageToast