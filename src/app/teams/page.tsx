import React from 'react'
import AboutTeams from '../components/AboutComponents/AboutTeams'
import Image from 'next/image'
import { Button } from '@nextui-org/react'

const TeamsPage = () => {


    return (
        <main>
            <section className='snap-y snap-mandatory w-full h-screen overflow-scroll scrollbar-hide'>
                <div className='w-full h-screen snap-start'>
                    <Image className='object-cover h-full' alt='office-friends' width={1920} height={1080} src='/webbg.webp' />
                </div>
                <div className='w-full h-screen snap-start flex items-center justify-center relative'>
                    <div className='relative z-10 text-primary-white text-center flex flex-col gap-6'>
                        <h1 className='text-4xl lg:text-6xl'>Join the Team</h1>
                        <Button color='primary' className='text-2xl lg:px-6 lg:py-4 '>Apply Now</Button>
                    </div>
                    <Image alt='background' className='absolute h-screen w-full object-cover top-0 z-0' width={1920} height={1080} src='/road.webp' />
                </div>
            </section>
            <AboutTeams />
        </main >
    )
}

export default TeamsPage