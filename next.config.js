/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev.beta.cnyes.cool',
      },
    ],
    domains: [
      'upload.cc',
      'aticle-image-gmbook.sgp1.digitaloceanspaces.com',
      'taiwan.taiwanstay.net.tw',
      'picsum.photos',
      'img.vietcetera.com',
      'en-media.thebetterindia.com',
      'thebetterindia-static.gumlet.io',
      'images.unsplash.com',
    ],
  },
};

module.exports = nextConfig;
