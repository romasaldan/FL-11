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
    filename: './js/js.js'
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'myApp',
      filename: 'index.html',
      template: './src/index.html'
  }),
  new PrettierPlugin({
    printWidth: 80,               // Specify the length of line that the printer will wrap on.
    tabWidth: 2,                  // Specify the number of spaces per indentation-level.
    useTabs: false,               // Indent lines with tabs instead of spaces.
    semi: true,                   // Print semicolons at the ends of statements.
    encoding: 'utf-8',            // Which encoding scheme to use on files
    extensions: [ ".js", ".ts" ]  // Which file extensions to process
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
      // Before using imagemin plugins make sure you have added them in `package.json` (`devDependencies`) and installed them

      // Lossless optimization with custom option
      // Feel free to experiment with options for better result for you
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

