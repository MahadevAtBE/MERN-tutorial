/** @type {import('next').NextConfig} */
const nextConfig = {  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "dfstudio-d420.kxcdn.com",
        // hostname: 'www.menucool.com',
        port: '',
      },
    ],
  },};

export default nextConfig;
