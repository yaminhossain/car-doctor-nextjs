/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com" ,
      },
      {
        protocol: "https",
        hostname: "graph.facebook.com" ,
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com" ,
      },
    ],
  },
};

export default nextConfig;
