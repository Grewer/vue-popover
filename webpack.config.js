const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include:path.join(__dirname,'./src'),
        options: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [],
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'popover.js',
    path: path.resolve(__dirname, 'dist')
  }
}