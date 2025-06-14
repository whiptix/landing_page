import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Thamani Crew',
  description: 'Thamani Crew',
  generator: 'Thamani Crew',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
