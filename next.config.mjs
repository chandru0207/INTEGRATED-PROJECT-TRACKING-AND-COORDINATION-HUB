/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "res.cloudinary.com" }],
    domains: ['images.pexels.com', 'ideogram.ai', 'images.unsplash.com'],

  },
};

export default nextConfig;
