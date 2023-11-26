import Image from "next/image"
import FooterCard from "./FooterCard"
import Link from "next/link"
import { FaYoutube, FaSquareXTwitter, FaSquareInstagram, FaMeta } from "react-icons/fa6";
import { officeLocation } from "@/data/office";

const Footer = () => {
    return (
        <footer className="bg-[#171717] py-4 lg:py-10">
            <div className='container mx-auto p-2 lg:p-4 flex-col flex gap-3 lg:gap-6'>
                <div className='flex flex-col items-center lg:items-start lg:flex-row lg:h-44 gap-4 lg:gap-10 py-4 lg:py-0'>
                    <div>
                        <Image className="w-44" src='https://github.com/SamzMalik/samz-img-collections/blob/main/flexbrand-logo/Certified_Andriod_Badge_2017_2018_Cropped-768x380.png?raw=true' width={512} height={512} alt="" />
                    </div>
                    <h1 className='lg:text-2xl font-bold text-white max-w-2xl'>
                        Banteng is the first Google certified agency in South East Asia.
                        Work with us in Indonesia, Singapore, Australia & The Netherlands.
                    </h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-10">
                    {officeLocation && officeLocation.map(office => {
                        return <FooterCard key={office.country} country={office.country}>{office.address}</FooterCard>
                    })}
                </div>
                <div className="">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between text-md items-center p-4 font-bold text-blue-50">
                        <h1>Logo</h1>
                        <Link href='/about'>About</Link>
                        <Link href='/services'>Services</Link>
                        <Link href='/portofolio'>Portofolio</Link>
                        <Link href='/portofolio'>Teams</Link>
                        <Link href='/contact'>Contact Us</Link>
                        <div className="flex gap-6">
                            <Link className="text-xl" href='https://twitter.com/elonmusk'><FaSquareXTwitter /></Link>
                            <Link className="text-xl" href='https://www.instagram.com/malik_samz/'><FaSquareInstagram /></Link>
                            <Link className="text-xl" href='https://www.youtube.com/@Fireship'><FaYoutube /></Link>
                            <Link className="text-xl" href='https://www.facebook.com/reel/758085502995835'><FaMeta /></Link>
                        </div>
                    </div>
                    <p className="opacity-80 text-center text-white">©️ 2023 PT.Zeus Gacha Semesta</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer