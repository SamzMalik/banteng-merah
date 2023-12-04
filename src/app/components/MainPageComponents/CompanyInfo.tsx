import React from 'react'
import CardCounter from './CardCounter'
import Image from 'next/image'

const CompanyInfo = () => {
    return (
        <section className="bg-blue-600 py-10 flex flex-col gap-8 lg:items-center lg:justify-center">
            <div className="container p-2 mx-auto flex justify-center gap-2 lg:gap-8 flex-wrap">
                <CardCounter metric="+ years" duration={3} end={8}>Experience in creating and maintaining mobile app</CardCounter>
                <CardCounter metric="offices" duration={3} end={4}>We operate in multi countries</CardCounter>
                <CardCounter metric="+ staffs" duration={3} end={200}>Of Indonesia's most talented staffs</CardCounter>
                <CardCounter metric="+ clients" duration={3} end={65}>Most of them are big company</CardCounter>
            </div>
            <div className="container p-2 gap-4 mx-auto grid grid-cols-2 lg:flex lg:justify-center lg:flex-wrap text-white text-xl">

                <div className="text-center text-sm lg:text-xl flex flex-col justify-center items-center">
                    <Image className="w-44 lg:96" src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/services-1.png?raw=true' alt="services" width={512} height={512} />
                    <div>
                        <p>Android & IOS</p>
                        <p>Custom Android Devices</p>
                        <p>Backend and Cloud</p>
                        <p>Wear OS & watchOS</p>
                    </div>
                </div>

                <div className="text-center text-sm lg:text-xl flex flex-col justify-center items-center">
                    <Image className="w-44 lg:w-96" src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/services-2.png?raw=true' alt="services" width={512} height={512} />
                    <div>
                        <p>Define and Design</p>
                        <p>Implementation</p>
                        <p>Consultation</p>
                    </div>
                </div>

                <div className="text-center text-sm lg:text-xl flex flex-col justify-center items-center">
                    <Image className="w-44 lg:w-96" src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/services-3.png?raw=true' alt="services" width={512} height={512} />
                    <div>
                        <p>Swift</p>
                        <p>Kotlin</p>
                        <p>Java</p>
                        <p>Flutter</p>
                    </div>
                </div>

                <div className="text-center flex flex-col text-sm lg:text-xl justify-center items-center">
                    <Image className="w-44 lg:w-96 " src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/services-4.png?raw=true' alt="services" width={512} height={512} />
                    <div >
                        <p>Analytics Services</p>
                        <p>Audit Services</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default CompanyInfo