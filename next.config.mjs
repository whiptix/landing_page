/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/landing_page',
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
