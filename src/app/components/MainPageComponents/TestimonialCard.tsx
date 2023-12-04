import { Card, CardBody, CardHeader, Image } from '@nextui-org/react'
import React from 'react'

type TestimonialCardProp = {
    companyImg: string,
    userName: string,
    userRole: string,
    userComment: string,
}

const TestimonialCard = ({ companyImg, userName, userRole, userComment }: TestimonialCardProp) => {
    return (
        <Card className="bg-primary-white text-primary-black shadow-xl opacity-80">
            <CardHeader className="flex flex-col lg:flex-row gap-3">
                <Image className="w-20 aspect-square" width={512} height={512} alt="user" src={companyImg} />
                <div className="text-center">
                    <h1 className='font-bold text-sm lg:text-xl'>{userName}</h1>
                    <p className="font-thin opacity-80 text-xs lg:text-xl">{userRole}</p>
                </div>
            </CardHeader>
            <CardBody className='text-center '>
                <p className='text-xs lg:text-lg'>{userComment}</p>
            </CardBody>
        </Card>
    )
}

export default TestimonialCard