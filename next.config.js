const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

const moduleExports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const styletron = {
    webpack: function (config) {
      config.externals = config.externals || {};
      config.externals["styletron-server"] = "styletron-server";
      return config;
    },
  };

  const security = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
    },
  };

  const nextjsHeaders = {
    poweredByHeader: false,
  };

  return {
    ...styletron,
    ...security,
    ...nextjsHeaders,
  };
};

module.exports = moduleExports();
