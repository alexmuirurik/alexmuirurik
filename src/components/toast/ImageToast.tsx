import Image from 'next/image'
import React, { useState } from 'react'

const ImageToast = async ({
    image,
    classList,
}: {
    image: any
    classList?: string | undefined
}) => {
    return (
        <Image
            className={'!relative aspect-video w-full ' + classList}
            src={image}
            alt="Shoes"
            fill
        />
    )
}

export default ImageToast
