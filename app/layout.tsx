import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Thamani Crew - Strategic Business Consulting",
  description:
    "Transform your business operations, increase revenue, and achieve sustainable growth through strategic consulting and innovative solutions in Nairobi, Kenya.",
  generator: "v0.app",

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
<head>
{/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-HJE2C9JZMG"></script>
<script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-HJE2C9JZMG');
  `}
</script>
</head>

      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
