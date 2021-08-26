/// <reference types="cypress" />

const injectNextDevServer = require("@cypress/react/plugins/next");
const codeCoverageTask = require("@cypress/code-coverage/task");

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.testingType === "component") {
    injectNextDevServer(on, config);
  }
  codeCoverageTask(on, config);
  return config;
};
