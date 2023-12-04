/* eslint-disable react/no-unescaped-entities */
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button, ButtonGroup } from "@nextui-org/react"

type CardBoxProps = {
    src: string,
    companyName: string,
    companyDesc: string,
    overlay: string,
}

const CardBox = ({ src, companyName, companyDesc, overlay }: CardBoxProps) => {
    return (
        <motion.div initial={{ opacity: 0, scale: 0 }} whileHover={{ scale: 1.05 }} whileInView={{ opacity: 100, scale: 1, }} transition={{ duration: 0.5 }} className="aspect-video rounded-xl overflow-hidden relative bg-opacity-40 bg-cover flex flex-col items-center-center justify-center shadow-lg">
            <div className={'absolute h-full w-full z-0' + ` ${overlay}`}></div>
            <div className='relative z-10 flex flex-col justify-center items-center lg:gap-8'>
                <Image className='w-24 h-24 lg:w-64 lg:h-64' width={512} height={512} src={src} alt='logo' />
                <div className='text-white flex flex-col gap-2'>
                    <h1 className='lg:text-2xl font-bold text-white'>{companyName}</h1>
                    <p className='text-sm lg:text-lg'>{companyDesc}</p>
                    <Button color='secondary'>See More</Button>
                </div>
            </div>
        </motion.div>
    )
}

export default CardBox