/** @type {import('next').NextConfig} */
const nextConfig = {
  // Pre-renders every page to static HTML in /out, served by Firebase Hosting.
  output: "export",
  // Images are pre-compressed by `npm run images`; static export has no image server.
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
