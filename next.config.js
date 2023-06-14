/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    loader: "custom",
    domains: [
      "images.pexels.com",
      "dummyimage.com",
      "tailwindui.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
