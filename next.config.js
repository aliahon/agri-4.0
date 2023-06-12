/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    domains: [
      "images.pexels.com",
      "dummyimage.com",
      "tailwindui.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
