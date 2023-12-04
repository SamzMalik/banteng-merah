import { Image } from '@nextui-org/react'
import React from 'react'
import ServiceContainer from '../components/ServiceComponents/ServiceContainer'

const ServicesPage = () => {
    return (
        <main className='w-full h-screen overflow-y-scroll lg:snap-y lg:snap-mandatory no-scrollbar'>
            <ServiceContainer />
            {/* <div className='snap-start  h-screen w-full p-10 bg-blue-900'>
                <div className='flex justify-center gap-10 items-center h-full'>
                    <div className='max-w-xl text-primary-white h-[90%] bg-blue-600 rounded-xl px-4'>
                        <Image alt='something' width={512} height={512} className='w-[1024px]' src='/uiux/uiux.png' />
                        <div>
                            <h1 className='text-4xl font-bold'>UI UX Design</h1>
                            <p className='text-xl'>At Banteng, our designers specialise in crafting stunning interfaces and intuitive digital experiences that will continue to delight and engage users. </p>
                        </div>
                    </div>
                    <div className='text-primary-white flex flex-col h-[90%] justify-center gap-6 bg-blue-600 rounded-xl px-4'>
                        <div className='flex gap-4'>
                            <div className='bg-blue-600 p-4 rounded-xl '>
                                <h1 className='text-2xl font-bold'>Technology</h1>
                                <ul className='flex gap-4 text-center'>
                                    <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/kotlin.png' />
                                        <p className='font-bold'>Figma</p>
                                    </li>
                                    <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/Swift_icon.png' />
                                        <p className='font-bold'>Framer</p>
                                    </li>
                                    <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/flutter.png' />
                                        <p className='font-bold'>Adobe XD</p>
                                    </li>
                                </ul>

                            </div>
                            <div className='bg-blue-600 p-4 rounded-xl'>
                                <h1 className='text-2xl font-bold'>Development Process</h1>
                                <ul className='flex gap-4 text-center'>
                                    <li className='p-1 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/uiux/workshop.png' />
                                        <p className='font-bold'>Design Workshop</p>
                                    </li>
                                    <li className='p-1 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/uiux/research.png' />
                                        <p className='font-bold'>Research</p>
                                    </li>
                                    <li className='p-1 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/uiux/wireframing.png' />
                                        <p className='font-bold'>Wireframing</p>
                                    </li>
                                    <li className='p-1 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/uiux/fidelity.png' />
                                        <p className='font-bold'>High Fidelity Assets</p>
                                    </li>
                                    <li className='p-1 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/uiux/prototyping.png' />
                                        <p className='font-bold'>Prototyping</p>
                                    </li>
                                    <li className='p-1 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                        <Image alt='something' width={64} height={64} src='/uiux/testing.png' />
                                        <p className='font-bold'>Usability Testing</p>
                                    </li>
                                </ul>

                            </div>
                        </div>
                        <div className='max-w-4xl self-center text-center flex flex-col items-center'>
                            <h1 className='text-3xl font-bold'>Our Methodology</h1>
                            <Image alt='software method' width={256} height={256} src='/uiux/UIUX-Hero.png' />
                            <p>Successful products are not only visually appealing, but they also reduce friction and allow users to seamlessly interact with the world around them. With our design thinking and human-centered approach, we believe everything should start and end with the user’s goals.</p>
                        </div>
                    </div>

                </div>

            </div> */}
        </main>
    )
}

export default ServicesPage