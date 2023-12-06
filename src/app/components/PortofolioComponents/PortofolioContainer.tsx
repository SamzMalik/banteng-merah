import { useRouter } from 'next/navigation'
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import React from 'react'
import ButtonCard from './ButtonCard'

type PortfolioProps = {
    id: number,
    name: string,
    imageSrc: string,
    headline: string,
    description: string,
    sector: string,
}[]

const PortofolioContainer: React.FC<{ data: PortfolioProps }> = ({ data }) => {
    const router = useRouter()
    return (
        <>
            {data && data.map(item => {
                return (<Card className='w-[550px]' key={item.name}>
                    <div className='flex justify-center w-full p-4'>
                        <Image className='w-96' src={item.imageSrc} alt={item.name} />
                    </div>
                    <CardHeader>
                        <h1 className='text-2xl font-bold'>{item.name}</h1>
                    </CardHeader>
                    <CardBody>
                        <p>{item.description}</p>
                    </CardBody>
                    <CardFooter>
                        <ButtonCard idPortofolio={item.id}>See Project</ButtonCard>
                    </CardFooter>
                </Card>
                )
            })}
        </>
    )
}

export default PortofolioContainer