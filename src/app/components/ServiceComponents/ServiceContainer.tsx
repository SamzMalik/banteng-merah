import Image from 'next/image'

const ServiceContainer = () => {
    return (
        <div className='snap-start  h-screen w-full p-10 bg-blue-900'>
            <div className='flex justify-center gap-10 items-center h-full'>
                <div className='max-w-xl text-primary-white h-[90%] bg-blue-600 rounded-xl px-4'>
                    <Image alt='something' width={512} height={512} className='w-[1024px]' src='/Software-Development.png' />
                    <div>
                        <h1 className='text-4xl font-bold'>Software Development</h1>
                        <p className='text-xl'>Our agile product development teams are structured specifically around the needs of your project. This allows us to quickly adapt to: shifting product needs, evolving markets, and any internal project factors as needed. In return, you receive test builds along with a test app presented every 2 weeks.</p>
                    </div>
                </div>
                <div className='text-primary-white flex flex-col h-[90%] justify-center gap-6 bg-blue-600 rounded-xl px-4'>
                    <div className='flex gap-4'>
                        <div className='bg-blue-600 p-4 rounded-xl'>
                            <h1 className='text-2xl font-bold'>Technology</h1>
                            <ul className='flex gap-4'>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/kotlin.png' />
                                    <p className='font-bold'>Kotlin</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/Swift_icon.png' />
                                    <p className='font-bold'>Swift</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/flutter.png' />
                                    <p className='font-bold'>Flutter</p>
                                </li>
                            </ul>

                        </div>
                        <div className='bg-blue-600 p-4 rounded-xl'>
                            <h1 className='text-2xl font-bold'>Development Process</h1>
                            <ul className='flex gap-4'>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/prepare.png' />
                                    <p className='font-bold'>Prepare</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/define.png' />
                                    <p className='font-bold'>Define</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/design.png' />
                                    <p className='font-bold'>Design</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/develop.png' />
                                    <p className='font-bold'>Develop</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/polish.png' />
                                    <p className='font-bold'>Polish</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/golive.png' />
                                    <p className='font-bold'>Going Live</p>
                                </li>
                                <li className='p-2 bg-primary-white rounded-md text-primary-black flex flex-col items-center justify-center'>
                                    <Image alt='something' width={64} height={64} src='/development-process/support.png' />
                                    <p className='font-bold'>Support</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='max-w-4xl self-center text-center flex flex-col items-center'>
                        <h1 className='text-3xl font-bold'>Our Methodology</h1>
                        <Image alt='software method' width={256} height={256} src='/software-dev-method.png' />
                        <p>Banteng uses a proprietary SDLC process inspired by SCRUM but with added quality controls. We believe in full transparency so our team can serve as an extension of your business. You will have full access to our tools as well as the ability to join: our daily stand-ups, participate in bi-weekly sprint planning and offer feedback every two weeks during our product demonstrations.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ServiceContainer