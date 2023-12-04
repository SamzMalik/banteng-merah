import AboutHero from '../components/AboutComponents/AboutHero'
import AboutTeams from '../components/AboutComponents/AboutTeams'
import CompanyHistory from '../components/AboutComponents/CompanyHistory'

const AboutPage = () => {
    return (
        <main className='w-full overflow-hidden'>
            <AboutHero />
            <CompanyHistory />
            <AboutTeams />
        </main>
    )
}

export default AboutPage