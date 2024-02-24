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
      title: "KizzTaskMaster App",
      favicon: "src/testimg.png",
      inject: "body",
      //twitter AND FACEBOOK meta with images
      meta: {
        twitterCardType: "summary_large_image",
        twitterImage: "https://kizztaskmaster.com/testimg.png",
        twitterTitle: "KizzTaskMaster App",
        twitterDescription: "KizzTaskMaster App",
      },

      //twitter meta without images
      // meta: {
      //   twitterCardType: "summary",
      //   twitterTitle: "KizzTaskMaster App",
      //   twitterDescription: "KizzTaskMaster App",
      // },

      //facebook meta without images
      // meta: {
      //   facebookCardType: "summary",
      //   facebookTitle: "KizzTaskMaster App",
      //   facebookDescription: "KizzTaskMaster App",
      // },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
