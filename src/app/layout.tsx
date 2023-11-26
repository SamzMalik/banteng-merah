import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "700"] })

export const metadata: Metadata = {
  title: 'Banteng',
  description: "Banteng is a leading mobile app development agency in Indonesia",
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
