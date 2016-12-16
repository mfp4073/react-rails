const path = require('path');

module.exports = {
  entry: {
    // game: './src/components/roots/GameRoot.js',
    products: './src/components/roots/ProductsRoot.js'
  },
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: '[name]-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      }
    ]
  }
};
