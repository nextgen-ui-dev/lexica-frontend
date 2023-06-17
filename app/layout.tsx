import './globals.css'
import HydrationHandler from './components/core/layout/HydrationHandler'
import { Montserrat, Hind } from 'next/font/google'
import ToastProvider from './providers/ToastProvider'
import LoginModal from './components/core/organism/modals/LoginModal'
import Footer from './components/core/organism/footer/Footer'
import Navbar from './components/core/organism/navbar/Navbar'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700']
});

const hind = Hind({
  subsets: ['latin'],
  variable: '--font-hind',
  weight: ['300', '400', '500', '600', '700']
});


export const metadata = {
  title: 'Lexica',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`relative selection:bg-primary-600 selection:text-white ${montserrat.className} ${hind.className}`}>
        <ToastProvider />
        <LoginModal />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
