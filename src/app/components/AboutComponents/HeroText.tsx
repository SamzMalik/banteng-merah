'use client'
import { motion } from 'framer-motion'

const HeroText = () => {
    return (
        <>
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="w-44 h-8 px-2 py-1 bg-blue-800">
                <p className="text-primary-white text-center">Who are we?</p>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, scale: 2 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-6xl font-bold text-primary-black text-center">We are Bantengs</motion.h1>
        </>
    )
}

export default HeroText