// next.config.mjs

export default {
  reactStrictMode: true,
  eslint: {
    // warn about ESLint errors (add 'ignore' to disable completely)
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.google.com',
      },
      // Remove the unnecessary pattern for www.google.com
    ],
  },
};
