const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[contenthash].js",
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    (config.devServer = {
      static: {
        directory: path.join(__dirname, "public"),
      },
      client: {
        overlay: false,
      },
      compress: false,
      port: 3000,
      open: true,
    }),
      (config.optimization.minimize = false);
    config.stats = "minimal";
  } else {
    config.stats = "verbose";
  }
  return config;
};
