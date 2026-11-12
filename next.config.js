/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Production already 302s /portfolio -> /portfolio/, so the app must declare the
  // slashed form itself rather than fight the host on every canonical and sitemap URL.
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/admin/blog/meeting-notes',
        destination: '/admin/blog',
        permanent: true,
      },
      {
        source: '/blog/meeting-notes',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/podcast',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/meeting-notes/:slug((?!.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|json)$)[^/]+)/',
        destination: '/blog/:slug/',
        permanent: true,
      },
      {
        source: '/blog/podcast/:slug((?!.*\\.(?:svg|png|jpg|jpeg|webp|gif|ico|json)$)[^/]+)/',
        destination: '/blog/:slug/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/access',
        destination: '/community/',
      },
      {
        source: '/access/',
        destination: '/community/',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/logos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000' }],
      },
      {
        source: '/blog-covers/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

module.exports = nextConfig;
