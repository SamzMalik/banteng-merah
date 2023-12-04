import React from 'react'
import CardBox from './CardBox'
import { portofolio } from '@/data/portofolioData'

const FeaturedWork = () => {
    return (
        <section className="container p-2 lg:p-0 mx-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-2 lg:gap-10 mt-12">
            <h1 className="self-center text-center text-md text-2xl lg:text-4xl font-bold">Featured Work</h1>
            {portofolio && portofolio.map(item => {
                return <CardBox
                    key={item.id}
                    id={item.id}
                    src={item.imageSrc}
                    companyName={item.name}
                    companyDesc={item.description}
                    overlay='bg-black'
                />
            })}

        </section>
    )
}

export default FeaturedWork