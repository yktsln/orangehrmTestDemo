const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "nmouq1",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
