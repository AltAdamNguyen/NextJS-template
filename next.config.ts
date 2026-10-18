import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. Cấu hình hiệu năng & Build tools */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  /* 2. Cấu hình Rewrite URL (Map slug tiếng Việt ra folder tiếng Anh) */
  async rewrites() {
    return [
      {
        source: "/tra-cuu",
        destination: "/search",
      },
      {
        source: "/nop-ho-so",
        destination: "/submit-document",
      },
      // {
      //   source: "/nop-ho-so/:step",
      //   destination: "/submit-document/:step",
      // },

      // TODO: Bổ sung thêm các route khác khi mở rộng nghiệp vụ
    ];
  },
};

export default nextConfig;
