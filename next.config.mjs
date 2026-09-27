// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [new URL('https://cdn.discordapp.com/icons/**?size=128')],
  },
}

export default nextConfig
