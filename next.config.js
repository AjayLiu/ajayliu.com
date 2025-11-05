/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: The "target" property is deprecated in Next.js 13+
  // Netlify plugin will handle the deployment configuration
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig

