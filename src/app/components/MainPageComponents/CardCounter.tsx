import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import TextCounter from './TextCounter'

type CardCounterProps = {
    metric: string,
    children: string,
    duration: number,
    end: number,
}

const CardCounter = ({ metric, children, duration, end }: CardCounterProps) => {
    return (
        <Card className='bg-[#171717] w-[165px] h-44 text-white lg:w-[350px] '>
            <CardHeader>
                <TextCounter className='text-xl lg:text-4xl font-bold' duration={duration} end={end} />
                <p className="text-lg lg:text-2xl">{metric}</p>
            </CardHeader>
            <CardBody>
                <h1 className='text-md lg:text-xl font-thin'>{children}</h1>
            </CardBody>
        </Card>
    )
}

export default CardCounter