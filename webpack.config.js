var path = require('path');
var webpack = require('webpack');

module.exports = {
  //devtool: 'source-map',
  entry: [
    './index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loader: 'babel',
      query: {
        cacheDirectory: true,
        "presets": [
          "react",
          "es2015",
          "stage-1"
        ],
        "plugins": ["transform-decorators-legacy"]
      },
      exclude: /node_modules/,
      include: path.join(__dirname)
    },
    ]
  }
};
