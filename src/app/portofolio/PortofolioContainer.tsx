import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

type PortfolioProps = {
    name: string,
    imageSrc: string,
    headline: string,
    description: string,
    sector: string,
}[]

const PortofolioContainer = ({ data }) => {
    return (
        <>
            {data && data.map(item => {
                return (<Card className='w-[550px]' key={item.name}>
                    <div className='flex justify-center w-full p-4'>
                        <Image className='w-96' src={item.imageSrc} />
                    </div>
                    <CardHeader>
                        <h1 className='text-2xl font-bold'>{item.name}</h1>
                    </CardHeader>
                    <CardBody>
                        <p>{item.description}</p>
                    </CardBody>
                    <CardFooter>
                        <Button className='w-1/2'>See Project</Button>
                    </CardFooter>
                </Card>
                )
            })}
        </>
    )
}

export default PortofolioContainer