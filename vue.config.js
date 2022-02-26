const { defineConfig } = require('@vue/cli-service')
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'assets',
  outputDir: path.resolve(__dirname, "./docs"),
  // assetsDir: "../../static/SPA"
})
