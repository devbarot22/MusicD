/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stockcake.com',
      },
    ], 
  },
};


export default nextConfig;
