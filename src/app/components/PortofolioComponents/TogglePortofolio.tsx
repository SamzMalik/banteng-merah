'use client'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useState, useEffect } from 'react'
import { portofolio } from '@/data/portofolioData'
import PortofolioContainer from './PortofolioContainer'

const TogglePortofolio = () => {
    const [currentType, setCurrentType] = useState('all')
    const [currentPortofolioData, setCurrentPortofolioData] = useState(portofolio)
    useEffect(() => {
        if (currentType != 'all') {
            const requestPortofolio = portofolio.filter(data => data.sector == currentType)
            setCurrentPortofolioData(requestPortofolio)
        } else {
            setCurrentPortofolioData(portofolio)
        }
    }, [currentType])
    return (
        <section>
            <div className='flex flex-wrap container mx-auto gap-4 justify-center'>
                <Button onClick={() => setCurrentType('all')} variant='solid' color='primary'>All</Button>
                <Button onClick={() => setCurrentType('financial')} variant='solid' color='primary'>Financial Services</Button>
                <Button onClick={() => setCurrentType('travel')} variant='solid' color='primary'>Travel and Transportation</Button>
                <Button onClick={() => setCurrentType('health')} variant='solid' color='primary'>Health Care</Button>
            </div>
            <div className='py-5 container mx-auto flex flex-wrap justify-center gap-4'>
                <PortofolioContainer data={currentPortofolioData} />
            </div>

        </section>
    )
}

export default TogglePortofolio