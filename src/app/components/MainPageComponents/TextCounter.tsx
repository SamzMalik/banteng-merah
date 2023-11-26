'use client'

import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const TextCounter = ({ className, end, duration }: { className: string, end: number, duration: number }) => {
    const [counterOn, setCounterOn] = useState(false)
    const ScrollTrigg = ScrollTrigger as any

    return (
        <ScrollTrigg onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <h1 className={className}>
                {counterOn && <CountUp end={end} duration={duration} />}
            </h1>
        </ScrollTrigg>
    )
}

export default TextCounter