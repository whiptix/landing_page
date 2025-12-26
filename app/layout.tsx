import type { Metadata } from 'next'
import '@/styles/globals.css'

import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800','900'],
});



export const metadata: Metadata = {
  title: 'Thamani Crew',
  description: 'Thamani Crew',
  generator: 'Thamani Crew',
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>{children}</body>
    </html>
  )
}
