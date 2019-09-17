const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './js/js.js',
	sourceMapFilename: "./js/[name].js.map"
  },
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({
      title: 'myApp',
      filename: 'index.html',
      template: './src/index.html'
  }),
  new PrettierPlugin({
    printWidth: 80,               
    tabWidth: 2,                 
    useTabs: false,              
    semi: true,                   
    encoding: 'utf-8',            
    extensions: [ ".js", ".ts" ]  
  }),
  new MiniCssExtractPlugin({
    filename: "css/styles.css"
  }),
  new CopyPlugin([{
    from: 'src/images',
    to:  'images/'
  }]),
  new ImageminPlugin({
    bail: false, // Ignore errors on corrupted images
    cache: true,
    name: "images/[name].[ext]",
    imageminOptions: {
      plugins: [
        ["gifsicle", { interlaced: true }],
        ["jpegtran", { progressive: true }],
        ["optipng", { optimizationLevel: 5 }],
        [
          "svgo",
          {
            plugins: [
              {
                removeViewBox: false
              }
            ]
          }
        ]
      ]
    }
  })

],
module: {
  rules: [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'prettier-loader',
        // parser: 'babel'
        

      }
    },
    {
      test: /\.s?css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }    
  ]
},
};

