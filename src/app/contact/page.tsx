import React from 'react'
import { IoMail, IoCall } from "react-icons/io5";
import FormContact from '../components/ContactPageComponents/FormContact';
import ImageContact from './ImageContact';


const ContactPage = () => {
    return (
        <main className='lg:h-screen w-full relative flex items-center'>
            <ImageContact />
            <div className='p-3 py-6 lg:p-0 gap-4 container mx-auto flex flex-col lg:flex-row relative z-10 justify-between'>
                <div className='text-white max-w-2xl flex flex-col gap-6'>
                    <h1 className='text-4xl lg:text-6xl font-bold'>Do you have a mobile app in mind?</h1>
                    <p className='text-lg'>If you are interested in working with us or just want to talk shop with some really smart, talented people, let us know! Fill out the form below and one of our team members will get back to you right away.</p>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl font-bold'>or just say hello:</p>
                        <div className='text-xl flex gap-4'>
                            <IoMail />
                            <p>hello@banteng.com</p>
                        </div>
                        <div className='text-xl flex gap-4'>
                            <IoCall />
                            <p>+62 8145 5413 1324</p>
                        </div>
                    </div>
                </div>
                <div className=' lg:w-[700px]'>
                    <FormContact />
                </div>
            </div>
        </main>
    )
}

export default ContactPage