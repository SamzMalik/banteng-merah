import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "700"] })

export const metadata: Metadata = {
  title: 'Banteng',
  description: "Banteng is a leading mobile app development agency in Indonesia. Founded in South Jakarta, Banteng is the first Google Certified Developer in South East Asia. We design, build and maintain mobile apps and their backends for most of the leading companies in various industries, like financial services, logistics and transportation, e-commerce, entertainment, loyalty and many more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <NavigationBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
