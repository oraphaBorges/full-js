//const webpack = requeire('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

const pathToMainJS       = require.resolve("./src/app.js");
const pathToIndexCss     = require.resolve("./src/css/style.css");
const pathToIndexHtml    = require.resolve("./src/index.html");
const pathToIndexFavicon = require.resolve("./src/img/favicon.ico");

module.exports =  {
    entry: [
      '@babel/polyfill',
      pathToMainJS,
      pathToIndexHtml,
      pathToIndexCss,
      pathToIndexFavicon,
    ],
    plugins: [
      new CleanWebpackPlugin(),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          type: 'asset/resource',
          generator: {
            filename: 'css/[name][ext][query]'
          }
        },
        {
          test: /\.html$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext][query]'
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext][query]'
          }
        },
      ]
    }
  };