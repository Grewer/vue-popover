const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: path.join(__dirname, './src'),
        options: {
          presets: ['es2015', "stage-2"]
        }
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', "less-loader"]
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
  plugins: [
    new VueLoaderPlugin()
  ],
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: 'popover.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'vue-grewer-popover',
    libraryTarget: 'umd'
  }
}