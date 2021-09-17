const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "../src/main.js"), //入口
  },
  output: {
    path: path.resolve(__dirname, "../dist"), //输出
    filename: "js/[name].[hash:8].js", //打包文件加上8位哈希值
    chunkFilename: "js/[name].[hash:8].js", //生成的chunk文件名称加上8位哈希值
    publicPath: "/", //资源引用路径
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240, //小于10k的图片转成base64
              name: "[name]_[hash:6].[ext]",
              outputPath: "assets",
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: "vue-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src/"),
      assets: path.resolve(__dirname, "../src/assets/"),
      utils: path.resolve(__dirname, "../src/utils/"),
    },
  },
  optimization: {
    splitChunks: {
      //分割代码块
      cacheGroups: {
        vendor: {
          //第三方依赖
          priority: 1, //首先抽离第三方模块
          name: "vendor",
          test: /node_modules/,
          chunks: "initial",
          minSize: 0,
          minChunks: 1, //最少引入了一次
        },
        //缓存组
        common: {
          //公共模块
          chunks: "initial",
          name: "common",
          minSize: 100, //超过100个字节
          minChunks: 3, //最少引入了三次
        },
        runtimeChunk: {
          name: "manifest", //代码块运行时
        },
      },
    },
  },
};
