/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.icons8.com",
      },
      {
        hostname: "www.rust-lang.org",
      },
      {
        hostname: "www.vim.org",
      },
    ],
  },
}

module.exports = nextConfig
