import type {NextConfig} from "next";

// Detecta se é build para export estático (cPanel)
const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Habilitar export estático apenas quando necessário
  ...(isStaticExport && {
    output: "export",
    trailingSlash: true
  }),

  // Otimizações de performance
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons", "lucide-react"]
  },

  // Compressão
  compress: true,

  // Otimização de imagens
  images: {
    // unoptimized apenas para export estático
    ...(isStaticExport && {unoptimized: true}),
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  },

  // Headers de cache (apenas quando NÃO é export)
  ...(!isStaticExport && {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "X-Frame-Options",
              value: "DENY"
            },
            {
              key: "X-Content-Type-Options",
              value: "nosniff"
            },
            {
              key: "Referrer-Policy",
              value: "origin-when-cross-origin"
            }
          ]
        },
        {
          source: "/static/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable"
            }
          ]
        },
        {
          source: "/_next/static/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=31536000, immutable"
            }
          ]
        }
      ];
    }
  }),

  // Webpack optimizations
  webpack: (config, {dev, isServer}) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all"
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer-motion",
            chunks: "all"
          },
          radixUI: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: "radix-ui",
            chunks: "all"
          }
        }
      };
    }
    return config;
  }
};

export default nextConfig;
