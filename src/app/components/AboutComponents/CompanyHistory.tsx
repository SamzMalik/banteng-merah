'use client'

import useScreenDetector from '@/hooks/useScreenDetector'
import { motion } from 'framer-motion'

const CompanyHistory = () => {
    const [isMobile] = useScreenDetector()
    return (
        <div className="lg:h-[80vh] bg-primary-black flex flex-col justify-center items-center p-2 py-5 text-center lg:text-left">
            <motion.div initial={{ x: isMobile ? -300 : -500, opacity: 0, }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }} className="container mx-auto flex flex-col text-primary-white gap-6 max-w-4xl text-xl">
                <h1 className="lg:text-4xl font-bold">Company History</h1>
                <p>Banteng is the first Google Certified Mobile Development Company in South East Asia. We are a global software development agency that offers on-demand technical consulting, product strategy, design and engineering services.</p>
                <p>With more than 65+ clients globally, Banteng has deployed mobile apps used by millions of people every day. Our clients include: Paramount Pictures, World Bank, Unilever, Ikea, Lion Air Group, Blue Bird, Bank of Centra Asia (BCA), Mandiri Sekuritas, HaloDoc, Sinarmas, Prodia as well as leading Indonesian Unicorns: Traveloka and Go-Jek</p>
                <p>We have a team of more than 60+ world-class designers, architects, developers, business analysts, testers and project managers who have collectively shipped product for some of the world’s largest companies and most innovative startups.</p>
            </motion.div>
        </div>
    )
}

export default CompanyHistory