'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

type Team = {
    name: {
        title: string,
        first: string,
        last: string
    },
    email: string,
    cell: string,
    picture: {
        large: string,
    }

}[]

const AboutTeams = () => {
    const [team, setTeam] = useState<Team>()
    useEffect(() => {
        async function getUser() {
            const fetchUser = await fetch('https://randomuser.me/api/?results=8')
            const userData = await fetchUser.json()
            setTeam(userData.results)
        }
        getUser()
    }, [])
    return (
        <div className="bg-primary-white flex flex-col justify-center p-2 py-4 gap-4">
            <div className="container mx-auto text-primary-white text-xl">
                <h1 className="text-primary-black text-4xl font-bold text-center">Meet our team</h1>
            </div>
            <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 justify-center gap-2">
                {team && team.map((person, i) => {
                    return (
                        <motion.div transition={{ duration: 1, delay: 0.2 + i * 0.1 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                            <Card className='w-ful'>
                                <CardHeader>
                                    <Image width={128} height={128} src={person.picture.large} alt={person.name.first} className="w-full h-44 lg:h-56 object-cover rounded-md" />
                                </CardHeader>
                                <CardBody>
                                    <h1 className="font-bold">{person.name.first}</h1>
                                    <p>{person.email}</p>
                                    <p>{person.cell}</p>
                                </CardBody>
                            </Card>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutTeams