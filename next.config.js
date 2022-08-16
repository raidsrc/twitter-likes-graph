/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true // remove this when it's time to get real
  },
  typescript: {
    ignoreBuildErrors: true // remove this when it's time to get real 
  }
}

module.exports = nextConfig
