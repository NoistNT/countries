/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { 
    remotePatterns: [{ hostname: 'https://flagcdn.com/' }],
    loader: 'default'
  }
};

export default nextConfig;
