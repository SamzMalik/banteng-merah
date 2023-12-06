import Image from 'next/image'
import React from 'react'

const ImageContact = () => {
    return (
        <Image src='/road.webp' width={1920} height={1080} alt='road-background' className='top-0 absolute w-full h-full object-cover' />
    )
}

export default ImageContact