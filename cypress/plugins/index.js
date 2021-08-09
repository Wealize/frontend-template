/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

//

/**
 * @type {Cypress.PluginConfig}
 */

// module.exports = (on, config) => {
//   const options = browserify.defaultOptions;
//   options.browserifyOptions.transform[1][1].babelrc = true;
//   options.typescript = require.resolve("typescript");
//   return config;
// };
// const browserify = require("@cypress/browserify-preprocessor");
// module.exports = (on, config) => {
//   const options = browserify.defaultOptions;
//   options.browserifyOptions.transform[1][1].babelrc = true;
//   options.typescript = require.resolve("typescript");
//   require("@cypress/code-coverage/task")(on, config);
//   on(
//     "file:preprocessor",
//     require("@cypress/code-coverage/use-browserify-istanbul")
//   );
//   return config;
// };

const injectNextDevServer = require("@cypress/react/plugins/next");
const codeCoverageTask = require("@cypress/code-coverage/task");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.testingType === "component") {
    injectNextDevServer(on, config);
  }
  codeCoverageTask(on, config);
  return config;
};


