const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    // print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the dist folder before build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "KizzTaskMaster App",
      favicon: "src/testimg.png",
      inject: "body",
      meta: {
        viewport: "width=device-width, initial-scale=1.0",
        "og:title": "KizzTaskMaster App",
        "og:description": "KizzTaskMaster App",
        "og:image": ".images/testimg.png",
        "og:type": "website",
        "og:url": "https://kizzylion.github.io/kizztaskmaster/",
        "twitter:card": "summary_large_image",
        "twitter:image": ".images/testimg.png",
        "twitter:title": "KizzTaskMaster App",
        "twitter:description": "KizzTaskMaster App",
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
