'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
import { Card, CardBody, CardHeader } from "@nextui-org/react"
import { useState, useEffect } from 'react'


const AboutHero = () => {
    const [team, setTeam] = useState([])

    useEffect(() => {
        async function getUser() {
            const fetchUser = await fetch('https://randomuser.me/api/?results=8')
            const userData = await fetchUser.json()
            setTeam(userData.results)
        }
        getUser()
    }, [])

    console.log(team)
    return (
        <main>
            <div className="h-screen relative">
                <div className="h-2/3 flex items-center justify-center relative">
                    <Image src='/about.jpg' width={1920} height={1080} alt="about-bg" className="w-full h-full absolute object-cover blur-[1.5px] opacity-90" />
                    <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                        <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} className="w-44 h-8 px-2 py-1 bg-blue-800">
                            <p className="text-primary-white text-center">Who are we?</p>
                        </motion.div>
                        <motion.h1 initial={{ opacity: 0, scale: 2 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className="text-6xl font-bold text-primary-white text-center">We are Bantengs</motion.h1>
                    </div>
                </div>
                <motion.div initial={{ scale: 0, opacity: 0 }} transition={{ duration: 1, delay: 1.5 }} whileInView={{ scale: 1, opacity: 100 }} className="flex items-center justify-center h-1/3">
                    <h1 className="text-2xl lg:text-5xl font-bold text-primary-black max-w-5xl text-center">We want to make a good quality mobile apps that is scalable and stable</h1>
                </motion.div>
            </div>
            <div className="bg-primary-black flex flex-col justify-center items-center">
                <motion.div initial={{ x: -500, opacity: 0, }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 2 }} className="container mx-auto flex flex-col text-primary-white gap-6 max-w-4xl text-xl">
                    <h1 className="text-4xl font-bold">Company History</h1>
                    <p>Ice House is the first Google Certified Mobile Development Company in South East Asia. We are a global software development agency that offers on-demand technical consulting, product strategy, design and engineering services.</p>
                    <p>With more than 65+ clients globally, Ice House has deployed mobile apps used by millions of people every day. Our clients include: Paramount Pictures, World Bank, Unilever, Ikea, Lion Air Group, Blue Bird, Bank of Centra Asia (BCA), Mandiri Sekuritas, HaloDoc, Sinarmas, Prodia as well as leading Indonesian Unicorns: Traveloka and Go-Jek</p>
                    <p>We have a team of more than 60+ world-class designers, architects, developers, business analysts, testers and project managers who have collectively shipped product for some of the world’s largest companies and most innovative startups.</p>
                </motion.div>
            </div>
            <div className="lg:h-[85vh] bg-primary-white flex flex-col justify-center p-2 py-4 gap-4">
                <div className="container mx-auto text-primary-white text-xl">
                    <h1 className="text-primary-black text-4xl font-bold text-center">Meet our team</h1>
                </div>
                <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-center gap-2">
                    {team && team.map(person => {
                        return (
                            <Card>
                                <CardHeader>
                                    <Image width={128} height={128} src={person.picture.large} alt={person.name.first} className="w-full h-44 lg:h-56 object-cover rounded-md" />
                                </CardHeader>
                                <CardBody>
                                    <h1 className="font-bold">{person.name.first} {person.name.last}</h1>
                                    <p>{person.email}</p>
                                    <p>{person.cell}</p>
                                </CardBody>
                            </Card>

                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default AboutHero