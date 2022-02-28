/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path:""
  },
  env : {
    API_URL: process.env.API_URL
  },
 
 // basePath: "/nft-business-card",
  //assetPrefix: "/nft-business-card"
}

module.exports = nextConfig
