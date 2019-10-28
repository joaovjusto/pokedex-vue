const webpack = require("webpack");
module.exports = {
  publicPath: "pokedex-vue",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery"
      })
    ]
  }
};
