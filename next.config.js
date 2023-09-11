/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
