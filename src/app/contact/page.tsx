'use client'
import React from 'react'
import Image from 'next/image'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button, Input } from "@nextui-org/react";
import { IoMail, IoCall } from "react-icons/io5";

const ContactPage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const register = () => {
        if (formik.values.email.length > 8 && !formik.errors.email) {
            onOpen();
        }
    }

    const formik = useFormik({
        initialValues: {
            company: "",
            name: "",
            phone: 0,
            email: ""
        },
        onSubmit: register,
        validationSchema: yup.object().shape({
            company: yup.string().required(),
            name: yup.string().required(),
            phone: yup.number().min(8, 'Your phone must be more than 8 numbers'),
            email: yup.string().required().email(),
        })
    })

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }


    return (
        <main className='lg:h-screen w-full relative flex items-center'>
            <Image width={1920} height={1080} alt='background' className='absolute object-cover w-full h-full -z-0' src='/road.png' priority={true} />
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
                    <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
                        <Input required isInvalid={formik.errors.company ? true : false} errorMessage={formik.errors.company} onChange={handleForm} type="text" label='Company*' placeholder='Your company' name='company' />
                        <Input required isInvalid={formik.errors.name ? true : false} errorMessage={formik.errors.name} onChange={handleForm} type="text" label='Name*' placeholder='Your Name' name='name' />
                        <Input required isInvalid={formik.errors.phone ? true : false} errorMessage={formik.errors.phone} onChange={handleForm} type="number" label='Phone*' placeholder='Your Phone' name='phone' />
                        <Input isInvalid={formik.errors.email ? true : false} errorMessage={formik.errors.email} onChange={handleForm} type="email" label='Email*' placeholder='Your Email' name='email' />
                        <Button onPress={register} className='w-44' type='submit'>Submit</Button>
                    </form>
                </div>
            </div>

            <Modal size='md' isOpen={isOpen} onClose={onClose} backdrop='opaque'>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">We will contact you soon</ModalHeader>
                            <ModalBody>
                                <p>
                                    Thank you for reaching out to us! Your message has been received, and we appreciate
                                    your interest in our mobile app services. Our team is dedicated to providing top-notch solutions,
                                    and we will get in touch with you shortly. In the meantime, feel free to explore more
                                    about our agency and the innovative mobile solutions we offer. We look forward to the opportunity
                                    to collaborate with you and turn your ideas into exceptional mobile experiences.
                                </p>
                            </ModalBody>
                            <ModalFooter className='flex justify-center'>
                                <Button color="primary" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>



        </main>
    )
}

export default ContactPage