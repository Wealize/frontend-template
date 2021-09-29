const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
const { withSentryConfig } = require("@sentry/nextjs");

const moduleExports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  console.log(`isDev:${isDev}  isProd:${isProd}`);

  const locale = {
    i18n: {
      locales: ["en-US", "es"],
      defaultLocale: "en-US",
    },
  };

  const styletron = {
    webpack: function (config) {
      config.externals = config.externals || {};
      config.externals["styletron-server"] = "styletron-server";
      return config;
    },
  };

  return {
    locale,
    styletron,
  };
};

const SentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};
module.exports = withSentryConfig(moduleExports(), SentryWebpackPluginOptions);
