import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/offerings/cohort", destination: "/offerings/intensive", permanent: true }];
  },
};

export default nextConfig;
