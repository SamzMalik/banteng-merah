/* eslint-disable react/no-unescaped-entities */
'use client'
import useScreenDetector from '@/hooks/useScreenDetector'

const Hero = () => {
    const [isMobile] = useScreenDetector()
    return (
        <main className="h-screen w-full relative text-center">
            <video className="w-full h-full absolute object-cover z-10 opacity-90" autoPlay muted loop >
                <source src='/loopvideo.mp4' />
            </video>
            <div className='relative z-20 text-white flex justify-center h-full w-full flex-col max-w-4xl mx-auto gap-10'>
                <h1 className='text-xl lg:text-6xl font-bold'>Indonesia's leading mobile app development agency</h1>
                <p className='text-md lg:text-2xl'>
                    Founded in South Jakarta, Banteng is the first Google Certified Developer in South East Asia. We design,
                    build and maintain mobile apps and their backends for most of the leading companies in various industries,
                    like financial services, logistics and transportation, e-commerce, entertainment, loyalty and many more.
                </p>
            </div>
        </main>
    )
}

export default Hero