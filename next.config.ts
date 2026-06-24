import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows the local SVG placeholder images to render through next/image.
    // Safe here because we only serve image assets we control from /public.
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },
};

export default nextConfig;
