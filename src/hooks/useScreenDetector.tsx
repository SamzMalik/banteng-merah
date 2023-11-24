import { useEffect, useState } from 'react'

const useScreenDetector = () => {
    const isSSR = typeof window === 'undefined'
    const [width, setWidth] = useState(isSSR ? 0 : window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })

        return window.removeEventListener('resize', () => {
            setWidth(window.innerWidth)
        })


    }, [width])

    const isMobile = width <= 640
    const isTablet = width <= 1024
    const isDesktop = width > 1024

    return [isMobile, isTablet, isDesktop]

}

export default useScreenDetector