/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // default is 'server'
  // experimental: {
  //   serverActions: true,
  // },
  // Static HTML Export
  output: "export",
  trailingSlash: true,
  //
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
