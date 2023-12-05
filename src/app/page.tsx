import Hero from "./components/MainPageComponents/Hero"
import FeaturedWork from "./components/MainPageComponents/FeaturedWork"
import ClientSection from "./components/MainPageComponents/ClientSection"
import Testimonial from "./components/MainPageComponents/Testimonial"
import CompanyInfo from "./components/MainPageComponents/CompanyInfo"
import ContactLink from "./components/MainPageComponents/ContactLink"

export default function Home() {

  return (
    <>
      <Hero />
      <FeaturedWork />
      <ClientSection />
      <CompanyInfo />
      <Testimonial />
      <ContactLink />
    </>
  )
}
