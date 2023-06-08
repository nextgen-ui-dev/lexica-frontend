import HydrationHandler from './components/core/layout/HydrationHandler'
import './globals.css'
import { Inter } from 'next/font/google'
import ToastProvider from './providers/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

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
      <HydrationHandler>
        <ToastProvider />
      </HydrationHandler>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
