
import Image from "next/image"
import CardBox from "./components/MainPageComponents/CardBox"
import Hero from "./components/MainPageComponents/Hero"
import { clientImage } from "@/data/clients"
import { Button } from "@nextui-org/react"
import CardCounter from "./components/MainPageComponents/CardCounter"
import TestimonialCard from "./components/MainPageComponents/TestimonialCard"
import { testimonialComments } from "@/data/comments"

export default function Home() {

  return (
    <>
      <Hero />
      <section className="container p-2 lg:p-0 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 mt-12">
        <h1 className="self-center text-center text-md lg:text-4xl font-bold">Featured Work</h1>
        <CardBox
          src='https://github.com/SamzMalik/samz-img-collections/blob/main/pwdk/gojek.1024x1024.png?raw=true'
          companyName="Gojek"
          companyDesc="Gojek: Indonesia’s First $10B Tech Start-Up"
          overlay='bg-gradient-to-r from-green-400 to-green-700'
        />
        <CardBox
          src='https://github.com/SamzMalik/samz-img-collections/blob/main/pwdk/bluebird.png?raw=true'
          companyName="Bluebird"
          companyDesc="Blue Bird: No.1 Taxi Group in South East Asia"
          overlay='bg-gradient-to-r from-blue-700 to-cyan-500'
        />
        <CardBox
          src='https://github.com/SamzMalik/samz-img-collections/blob/main/pwdk/mybca.png?raw=true'
          companyName="MyBca"
          companyDesc="Simplifies your banking experience"
          overlay='bg-gradient-to-r from-blue-800 to-blue-500'
        />
        <CardBox
          src='https://github.com/SamzMalik/samz-img-collections/blob/main/pwdk/Lion%20Parcel%20Logo%20(PNG-1080p)%20-%20Vector69Com.png?raw=true'
          companyName="Lion Parcel"
          companyDesc="Lion Parcel: Shipping 50,000 Packages Daily"
          overlay='bg-gradient-to-r from-red-800 to-red-500'
        />
        <CardBox
          src='https://github.com/SamzMalik/samz-img-collections/blob/main/pwdk/gojek.1024x1024.png?raw=true'
          companyName="Gojek"
          companyDesc="Gojek: Indonesia’s First $10B Tech Start-Up"
          overlay='bg-gradient-to-r from-green-400 to-green-700'
        />
      </section>
      <section className="h-96 lg:h-screen container p-2 mx-auto py-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 self-start">Our Happy Client</h1>
        <p className="text-lg max-w-lg text-blue-300 self-start">We have partnered with some of world's most successful brands to create innovative experiences loved by customers</p>
        <div className="grid grid-cols-6 gap-2 md:gap-6 w-5/6 mx-auto">
          {clientImage && clientImage.map(client => {
            return <Image className="" width={512} height={512} key={client.imageUrl} src={client.imageUrl} alt='brand' />
          })}
        </div>
      </section >
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

      <section className="bg-primary-white p-2 flex flex-col items-center justify-center lg:py-10 relative">
        <div className="container mx-auto flex flex-col gap-8 relative z-30">
          <h1 className="text-4xl font-bold text-primary-white text-center">Testimonial</h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 flex-wrap">
            {testimonialComments && testimonialComments.map(user => {
              return <TestimonialCard key={user.userName} companyImg={user.companyImg} userComment={user.userComment} userName={user.userName} userRole={user.userRole} />
            })}
          </div>
        </div>
        <video className="absolute w-full h-full object-cover opacity-90" autoPlay muted loop >
          <source src="/loopvideo.mp4" />
        </video>
      </section>

      <section className="w-full bg-blue-600 h-[350px] flex items-center relative overflow-hidden">
        <div className="container p-2 mx-auto text-white relative z-10 flex flex-col gap-3">
          <h1 className="text-xl lg:text-4xl font-bold">Loving what you're seeing so far?</h1>
          <p className="text-md lg:text-xl">It doesn't have to be a project. Questions or love letters is fine. Drop us a line</p>
          <Button variant="bordered" color="default" className="w-44 h-12 lg:w-56 lg:h-16 text-white">Let's talk</Button>
        </div>
        <Image className="absolute right-1/3 translate-x-1/2 -bottom-5 -z-0 opacity-40 lg:opacity-100" width={512} height={512} alt="paper-airplane" src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/paperplane.png?raw=true' />
      </section>

    </>
  )
}
