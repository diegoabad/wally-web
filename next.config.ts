import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/contacto",
        destination: "/#faq",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
