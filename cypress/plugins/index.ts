/// <reference types="cypress" />

const codeCoverageTask = require("@cypress/code-coverage/task");

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  codeCoverageTask(on, config);
  return config;
};
