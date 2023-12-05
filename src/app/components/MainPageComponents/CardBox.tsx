'use client'
import { motion } from 'framer-motion'
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react"
import { useRouter } from 'next/navigation'

type CardBoxProps = {
    id: number,
    src: string,
    companyName: string,
    companyDesc: string,
    overlay: string,
}

const CardBox = ({ id, src, companyName, companyDesc }: CardBoxProps) => {
    const router = useRouter()
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }} whileHover={{ scale: 1.03 }} whileInView={{ opacity: 100, scale: 1, }} transition={{ duration: 0.7 }} className="">
            <Card className='p-2'>
                <CardHeader className='flex justify-center h-full'>
                    <Image height={320} className='h-56 lg:h-72' src={src} alt='logo' />
                </CardHeader>
                <CardBody className='lg:h-36'>
                    <h1 className='lg:text-2xl font-bold text-primary-black'>{companyName}</h1>
                    <p className='text-sm lg:text-lg'>{companyDesc}</p>
                </CardBody>
                <CardFooter>
                    <Button onClick={() => router.push(`/portofolio/${id}`)} color='primary'>See More</Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}

export default CardBox