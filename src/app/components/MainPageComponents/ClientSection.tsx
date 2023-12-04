import React from 'react'
import { clientImage } from '@/data/clients'
import { Image } from '@nextui-org/react'

const ClientSection = () => {
    return (
        <section className="h-96 lg:h-screen container p-2 mx-auto py-5 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 self-start">Our Happy Client</h1>
            <p className="text-lg max-w-lg text-blue-300 self-start">We have partnered with some of world's most successful brands to create innovative experiences loved by customers</p>
            <div className="grid grid-cols-6 gap-2 md:gap-6 w-5/6 mx-auto">
                {clientImage && clientImage.map(client => {
                    return <Image className="" width={512} height={512} key={client.imageUrl} src={client.imageUrl} alt='brand' />
                })}
            </div>
        </section >

    )
}

export default ClientSection