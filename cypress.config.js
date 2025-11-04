const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: false,
    html: true,
    json: false,
    reportFilename: "relatorio-teste", // nome fixo do arquivo
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
    timestamp: 'ddmmyyyy'
    //timestamp: 'ddmmyyyy_HHMMss'
  }
});
