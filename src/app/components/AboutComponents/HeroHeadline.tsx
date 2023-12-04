'use client'
import { motion } from 'framer-motion'

const HeroHeadline = () => {
    return (
        <motion.div initial={{ scale: 0, opacity: 0 }} transition={{ duration: 1, delay: 0.5 }} whileInView={{ scale: 1, opacity: 100 }} viewport={{ once: true }} className="flex items-center justify-center h-1/3">
            <h1 className="text-2xl lg:text-5xl font-bold text-primary-black max-w-5xl text-center">We want to make a good quality mobile apps that is scalable and stable</h1>
        </motion.div>
    )
}

export default HeroHeadline