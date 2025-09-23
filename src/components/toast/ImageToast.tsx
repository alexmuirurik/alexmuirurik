import Image from 'next/image'
import React, { useState } from 'react'

const ImageToast = async ({
    image,
    className,
}: {
    image: any
    className?: string | undefined
}) => {
    return (
        <Image
            className={'!relative aspect-video w-full ' + className}
            src={image}
            alt="Shoes"
            fill
        />
    )
}

export default ImageToast
