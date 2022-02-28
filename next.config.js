/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path:""
  },
  env : {
    API_URL: process.env.API_URL
  }
 
  //basePath: "/business-card",
  //assetPrefix: "/business-card"
}

module.exports = nextConfig
