const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");


module.exports = (phase) => {
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

