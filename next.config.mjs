/** @type {import('next').NextConfig} */
const nextConfig = {

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },

  trailingSlash: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
}

export default nextConfig
