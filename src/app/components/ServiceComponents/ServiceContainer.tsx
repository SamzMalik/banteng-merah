import { Image } from '@nextui-org/react'
import ServiceBody from './ServiceBody'

const ServiceContainer = () => {
    return (
        <div className='lg:h-screen w-full bg-primary-white'>
            <div className='flex flex-col lg:flex-row justify-center gap-10 items-center lg:h-screen'>
                <div className='max-w-xl text-primary-white bg-blue-500 rounded-xl p-4 lg:h-[612px]'>
                    <Image alt='something' className='w-[422px]' src='/software-development.webp' />
                    <div className='p-2 lg:p-4'>
                        <h1 className='text-lg lg:text-3xl font-bold'>Software Development</h1>
                        <p className='text-sm lg:text-md lg:text-lg'>Our agile product development teams are structured specifically around the needs of your project. This allows us to quickly adapt to: shifting product needs, evolving markets, and any internal project factors as needed. In return, you receive test builds along with a test app presented every 2 weeks.</p>
                    </div>
                </div>
                <ServiceBody />
            </div>

        </div>
    )
}

export default ServiceContainer