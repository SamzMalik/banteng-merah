
import CardBox from "./components/MainPageComponents/CardBox"
import Hero from "./components/MainPageComponents/Hero"

export default function Home() {
  const url = ['https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Mobile-NA.mp4', 'https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4']
  console.log('re-rendering...')

  return (
    <>
      <Hero url={url} />
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
        <h1 className="self-center text-center text-4xl font-bold">Featured Work</h1>
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
      </section>
      <section>

      </section>
    </>
  )
}
