import React from 'react'

const PortofolioHero = () => {
    return (
        <section className='relative bg-primary-white h-[600px]'>
            <div className='w-full h-96 bg-blue-100 flex flex-col items-center justify-center relative text-center'>
                <div className='p-2'>
                    <h1 className='text-3xl font-bold lg:text-6xl'>App Development Project Ideas</h1>
                    <p className='text-xl lg:text-3xl text-primary-black opacity-80'>More than 65+ Clients (and counting)</p>
                </div>
                <div className='lg:w-[970px] h-64 bottom-0 translate-y-2/3 bg-blue-600 rounded-lg absolute flex justify-center items-center'>
                    <h1 className='text-white font-bold text-2xl lg:text-5xl lg:max-w-2xl text-center'>We develop digital strategies, products and services</h1>
                </div>
            </div>
        </section>
    )
}

export default PortofolioHero