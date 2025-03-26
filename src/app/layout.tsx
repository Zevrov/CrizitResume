import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Wolf Hopkins - Senior Developer',
  description: 'Professional portfolio and resume showcasing full-stack development expertise',
  keywords: ['developer', 'software engineer', 'full stack', 'web development', 'portfolio'],
  authors: [{ name: 'Wolf Hopkins' }],
  openGraph: {
    title: 'Wolf Hopkins - Senior Developer',
    description: 'Professional portfolio and resume showcasing full-stack development expertise',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 