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

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// @ts-ignore - no @types/@cypress_browserify-preprocessor
const browserify = require("@cypress/browserify-preprocessor");

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  const options = browserify.defaultOptions;
  options.browserifyOptions.transform[1][1].babelrc = true;
  options.typescript = require.resolve("typescript");

  require("@cypress/code-coverage/task")(on, config);
  on(
    "file:preprocessor",
    require("@cypress/code-coverage/use-browserify-istanbul")
  );
  return config;
};
