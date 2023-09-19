import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

const font = Nunito({ subsets: ['latin'] })

// Reserved constant in NextJS 13 to control your metadatas
export const metadata: Metadata = {
  title: 'CrashBnB | An AirBnB Clone',
  description: 'This is a CrashBnB application, a clone of the airbnb website developed using NextJS 13.4',
}

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
