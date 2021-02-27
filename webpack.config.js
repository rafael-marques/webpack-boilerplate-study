require('dotenv').config();
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => {
  return {
    mode: 'development',
    entry: {
      home: ['./src/js/home.js', './src/scss/home.scss'],
      main: ['./src/js/main.js', './src/scss/main.scss'],
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'src', 'html'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new MiniCssExtractPlugin({
        filename: '[name].min.css',
      }),
    ],
    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/dist',
    },
  };
};
