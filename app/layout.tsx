import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Logan Nitzsche | Full Stack Developer',
  description: 'Full-stack developer specializing in modern web technologies and scalable applications',
  keywords: ['developer', 'portfolio', 'full stack', 'software engineer', 'Logan Nitzsche'],
  authors: [{ name: 'Logan Nitzsche' }],
  openGraph: {
    title: 'Logan Nitzsche - Full Stack Developer',
    description: 'Full-stack developer portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
