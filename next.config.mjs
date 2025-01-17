/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 移除实验性功能，使用稳定版配置
  webpack: (config, { isServer }) => {
    // 自定义webpack配置
    return config
  },
}

export default nextConfig
