import { Image } from '@nextui-org/react'

const ServiceBody = () => {
    return (
        <div className='text-primary-white flex flex-col lg:h-[612px] justify-center gap-6 bg-blue-600 rounded-xl px-4'>
            <div className='flex gap-4'>
                <div className='bg-blue-600 p-4 rounded-xl mx-auto'>
                    <h1 className='lg:text-3xl font-bold text-center'>Technology</h1>
                    <ul className='flex gap-4 mt-4'>
                        <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                            <Image alt='something' width={44} height={44} src='/kotlin.webp' />
                            <p className='font-bold'>Kotlin</p>
                        </li>
                        <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                            <Image alt='something' width={44} height={44} src='/Swift_icon.png' />
                            <p className='font-bold'>Swift</p>
                        </li>
                        <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                            <Image alt='something' width={44} height={44} src='/flutter.png' />
                            <p className='font-bold'>Flutter</p>
                        </li>
                    </ul>

                </div>

            </div>
            <div className='max-w-4xl self-center text-center flex flex-col items-center p-4'>
                <h1 className='lg:text-3xl font-bold'>Our Methodology</h1>
                <Image alt='software method' width={224} height={224} src='/software-dev-method.png' />
                <p className='text-sm'>Banteng uses a proprietary SDLC process inspired by SCRUM but with added quality controls. We believe in full transparency so our team can serve as an extension of your business. You will have full access to our tools as well as the ability to join: our daily stand-ups, participate in bi-weekly sprint planning and offer feedback every two weeks during our product demonstrations.</p>
            </div>
        </div>
    )
}

export default ServiceBody