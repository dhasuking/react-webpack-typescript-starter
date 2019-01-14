const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  output: {
    filename: 'bundle.min.js',
    path: path.join(__dirname, '/dist'),
    
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
        filename: "style.[contenthash].css"
    }),
  ]
}
