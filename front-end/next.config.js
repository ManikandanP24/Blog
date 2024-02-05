
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com", "wallpapercave.com"],
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'images.pexels.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'wallpapercave.com',
    //     port: '',
    //     pathname: '/4k-wallpapers/**', // Adjust the pathname based on the actual structure
    //   },
    // ],
  },
};

module.exports = nextConfig;
