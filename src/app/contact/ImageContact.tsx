'use client'
import useScreenDetector from '@/hooks/useScreenDetector'
import Image from 'next/image'
import React from 'react'

const ImageContact = () => {
    const [isMobile] = useScreenDetector()
    return (
        <Image objectFit='objectFit' className='absolute object-cover w-screen h-screen -z-0' src='/road.webp' alt='road-bg' width={isMobile ? 500 : 1920} height={isMobile ? 900 : 1080} />
    )
}

export default ImageContact