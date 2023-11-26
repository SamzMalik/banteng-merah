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
        <Card className="bg-black text-white">
            <CardHeader className="flex flex-col lg:flex-row gap-3">
                <Image className="w-20 aspect-square" width={512} height={512} alt="user" src={companyImg} />
                <div className="text-center text-sm">
                    <h1 className='font-bold'>{userName}</h1>
                    <p className="font-thin opacity-80">{userRole}</p>
                </div>
            </CardHeader>
            <CardBody className='text-sm text-center'>
                <p>{userComment}</p>
            </CardBody>
        </Card>
    )
}

export default TestimonialCard