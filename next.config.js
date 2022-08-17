/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: false // remove this when it's time to get real
  },
  typescript: {
    ignoreBuildErrors: false // remove this when it's time to get real 
  }
}

module.exports = nextConfig
