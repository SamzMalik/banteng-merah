'use client'

import { useState, useRef, useEffect } from 'react';
import CountUp from 'react-countup';


const TextCounter = ({ className, end, duration }: { className: string, end: number, duration: number }) => {
    const [isVisible, setIsVisible] = useState(false)
    const counterText: any = useRef(null)
    const hasAnimatedOnce = useRef(false)
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !hasAnimatedOnce.current) {
                setIsVisible(entries[0].isIntersecting)
                hasAnimatedOnce.current = true
            }
        }, { rootMargin: '-100px' })
        observer.observe(counterText.current)

        return () => observer.disconnect()
    },)

    return (

        <h1 ref={counterText} className={className}>
            {isVisible && <CountUp end={end} duration={duration} />}
        </h1>

    )
}

export default TextCounter