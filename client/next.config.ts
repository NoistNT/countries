const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: 'https://flagcdn.com/' }],
    loader: 'default'
  }
};

export default nextConfig;
