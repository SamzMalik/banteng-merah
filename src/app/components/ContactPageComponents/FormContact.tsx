'use client'
import React from 'react'
import { Input, Button, useDisclosure, ModalContent, ModalFooter, ModalBody, ModalHeader, Modal } from '@nextui-org/react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const FormContact = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const register = () => {
        if (formik.values.email.length > 8 && !formik.errors.email) {
            onOpen()
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
            phone: yup.number().required().test('len', 'Your phone must be more than 10 numbers', num => num.toString().length >= 10),
            email: yup.string().required().email(),
        })
    })

    const handleForm = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event
        formik.setFieldValue(target.name, target.value)
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-6'>
                <Input required isInvalid={formik.errors.company ? true : false} errorMessage={formik.errors.company} onChange={handleForm} type="text" label='Company*' placeholder='Your company' name='company' />
                <Input required isInvalid={formik.errors.name ? true : false} errorMessage={formik.errors.name} onChange={handleForm} type="text" label='Name*' placeholder='Your Name' name='name' />
                <Input required isInvalid={formik.errors.phone ? true : false} errorMessage={formik.errors.phone} onChange={handleForm} type="number" label='Phone*' placeholder='Your Phone' name='phone' />
                <Input isInvalid={formik.errors.email ? true : false} errorMessage={formik.errors.email} onChange={handleForm} type="email" label='Email*' placeholder='Your Email' name='email' />
                <Button onPress={register} className='w-44' type='submit'>Submit</Button>
            </form>
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
        </>
    )
}

export default FormContact