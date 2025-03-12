/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  // Ensure proper static generation
  reactStrictMode: true,
  // Disable size optimization
  swcMinify: false,
  // Ensure proper CSS processing
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  // Disable size optimization to maintain consistent sizing
  compiler: {
    removeConsole: false,
  },
  experimental: {
    optimizeCss: false,
  },
  // Add this to handle GitHub Pages properly
  distDir: 'out',
};

export default nextConfig;