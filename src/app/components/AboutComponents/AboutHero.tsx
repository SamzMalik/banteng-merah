import Image from 'next/image'
import HeroHeadline from './HeroHeadline'
import HeroText from './HeroText'

const AboutHero = () => {


    return (
        <main className="w-full overflow-hidden">
            <div className="h-screen relative">
                <div className="h-2/3 flex items-center justify-center relative">
                    <Image src='/about.jpg' width={1920} height={1080} alt="about-bg" className="w-full h-full absolute object-cover blur-[1.5px] opacity-90" />
                    <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                        <HeroText />
                    </div>
                </div>
                <HeroHeadline />
            </div>
        </main>
    )
}

export default AboutHero