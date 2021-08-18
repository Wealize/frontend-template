const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* development only config options here */

      // React's Strict Mode is a development mode only feature for highlighting potential problems in an application
      reactStrictMode: true,
    };
  }

  return {
    /* config options for all phases except development here */
  };
};
