const path = require("path");
const { merge } = require("webpack-merge");
const webpackBase = require("./webpack.base");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(webpackBase, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      path: path.resolve(__dirname, "../dist"),
      filename: "index.html",
      minify: {
        removeAttributeQuotes: false, //是否删除属性的双引号
        collapseWhitespace: false, //是否折叠空白
      },
      hash: true, //是否加上hash
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new webpack.HotModuleReplacementPlugin(), //配合devServer实现热更新，热更新不能用于生成模式
  ],
  devtool: "eval-cheap-module-source-map", //适合开发环境查看源代码
  devServer: {
    port: 3000, //默认是8080
    compress: true, //是否启用gzip压缩
    open: true, //自动打开也没
    hot: true, //是否热更新
    static: {
      directory: "./dist",
    },
  },
});
