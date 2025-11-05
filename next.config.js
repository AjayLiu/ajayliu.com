/** @type {import('next').NextConfig} */
const nextConfig = {
  // Temporary workaround: removed output: 'export' to work with outdated plugin
  // TODO: Remove @netlify/plugin-nextjs@3.9.2 from Netlify UI, then re-enable output: 'export'
  // With static export, you don't need the plugin at all
}

module.exports = nextConfig

