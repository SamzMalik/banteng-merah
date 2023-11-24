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
        <motion.div whileHover={{ scale: 1.05 }} className="aspect-video rounded-xl overflow-hidden relative bg-opacity-40 bg-cover flex flex-col items-center-center justify-center shadow-lg">
            <div className={'absolute h-full w-full z-0' + ` ${overlay}`}></div>
            <div className='relative z-10 flex flex-col justify-center items-center gap-8'>
                <Image className='w-64 h-64' width={512} height={512} src={src} alt='logo' />
                <div className='text-white'>
                    <h1 className='text-2xl font-bold text-white'>{companyName}</h1>
                    <p>{companyDesc}</p>
                    <Button color='default' variant='ghost'>See More</Button>
                </div>
            </div>
        </motion.div>
    )
}

export default CardBox