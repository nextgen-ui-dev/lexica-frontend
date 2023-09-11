/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "https",
        pathname: "lh3.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
