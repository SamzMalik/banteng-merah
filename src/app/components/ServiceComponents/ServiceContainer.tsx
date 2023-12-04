import Image from 'next/image'
import ServiceBody from './ServiceBody'

const ServiceContainer = () => {
    return (
        <div className='snap-start  lg:h-screen w-full p-10 bg-blue-900'>
            <div className='flex flex-col lg:flex-row justify-center gap-10 items-center lg:h-full'>
                <div className='max-w-xl text-primary-white h-[90%] bg-blue-600 rounded-xl p-4'>
                    <Image alt='something' width={512} height={512} className='w-[1024px]' src='/Software-Development.png' />
                    <div className='p-2 lg:p-4'>
                        <h1 className='text-lg lg:text-3xl font-bold'>Software Development</h1>
                        <p className='text-sm lg:text-xl'>Our agile product development teams are structured specifically around the needs of your project. This allows us to quickly adapt to: shifting product needs, evolving markets, and any internal project factors as needed. In return, you receive test builds along with a test app presented every 2 weeks.</p>
                    </div>
                </div>
                <ServiceBody />

            </div>

        </div>
    )
}

export default ServiceContainer