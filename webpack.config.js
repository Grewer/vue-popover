const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include:path.join(__dirname,'./src'),
        options: {
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        loader: "less-loader"
      }
    ]
  },
  externals: {
    vue: 'vue'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
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