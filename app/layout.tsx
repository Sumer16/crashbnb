import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Reserved constant in NextJS 13 to control your metadatas
export const metadata: Metadata = {
  title: 'AirBnB',
  description: 'This is a AirBnB clone website developed using NextJS 13.4',
}

// Using this instead of inter
const font = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
