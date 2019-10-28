const webpack = require("webpack");
module.exports = {
  // publicPath: "<loja-teste>",
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jquery"
      })
    ]
  }
};
