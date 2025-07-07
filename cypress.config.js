const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-junit-reporter',
  reporterOptions: {
    mochaFile: 'cypress/results/unit.xml',
    toConsole: true,
    attachments: true
  },
  e2e: {
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    video: true,
    screenshotOnRunFailure: true
  },
  component: {
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'react',
      bundler: 'webpack'
    }
  }
});
