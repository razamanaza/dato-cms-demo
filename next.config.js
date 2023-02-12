/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/mirfanery',
  images: {
    domains: ['www.datocms-assets.com'],
    loader: 'akamai',
    path: '/',
  },
  assetPrefix: './',
}
