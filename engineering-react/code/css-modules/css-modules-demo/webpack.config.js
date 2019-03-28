let path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules!sass-loader"
        // loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]-[hash:base64:5]"
      },
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, './dist'),
    host: 'localhost',
    port: 9090
  },
};
