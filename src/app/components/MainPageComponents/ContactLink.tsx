import React from 'react'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

const ContactLink = () => {
    return (
        <section className="w-full bg-blue-600 h-[350px] flex items-center relative overflow-hidden">
            <div className="container p-2 mx-auto text-white relative z-10 flex flex-col gap-3">
                <h1 className="text-xl lg:text-4xl font-bold">Loving what you're seeing so far?</h1>
                <p className="text-md lg:text-xl">It doesn't have to be a project. Questions or love letters is fine. Drop us a line</p>
                <Link href='/contact'>
                    <Button variant="bordered" color="default" className="w-44 h-12 lg:w-56 lg:h-16 text-white">Let's talk</Button>
                </Link>
            </div>
            <Image className="absolute right-1/4 translate-x-1/2 -bottom-5 -z-0 opacity-40 lg:opacity-80" width={512} height={512} alt="paper-airplane" src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/paperplane.png?raw=true' />
        </section>
    )
}

export default ContactLink