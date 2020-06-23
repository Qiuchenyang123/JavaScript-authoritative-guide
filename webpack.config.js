const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack")
module.exports = {
  entry: {
    main: "./src/index.js"
  },
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    inline: true,
    port: 9001,
    overlay: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader" 
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({ title: "Title", template: "./src/index.html" }),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,"dist")
  },
}