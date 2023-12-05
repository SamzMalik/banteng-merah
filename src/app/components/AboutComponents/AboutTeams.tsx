import { Card, CardBody, CardHeader } from '@nextui-org/react'
import { Image } from '@nextui-org/react'

type Team = {
    results: any[],
    info: any,
}

const AboutTeams = async () => {
    const staticTeam: Response = await fetch('https://randomuser.me/api/?results=8')
    const team: Team = await staticTeam.json()
    const data = team.results

    return (
        <div className="bg-primary-white flex flex-col justify-center p-2 py-4 gap-4">
            <div className="container mx-auto text-primary-white text-xl">
                <h1 className="text-primary-black text-4xl font-bold text-center">Meet our team</h1>
            </div>
            <div className="flex flex-wrap container mx-auto justify-center gap-6 items-center">
                {data && data.map((person) => {
                    return (
                        <Card key={person.id} className='w-56'>
                            <CardHeader className='flex justify-center'>
                                <Image isZoomed src={person.picture.large} alt={person.name.first} />
                            </CardHeader>
                            <CardBody>
                                <h1 className="font-bold">{person.name.first}</h1>
                                <p>{person.email}</p>
                                <p>{person.cell}</p>
                            </CardBody>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default AboutTeams