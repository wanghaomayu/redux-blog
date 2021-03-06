var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');  // 加了个无用代码清楚插件

module.exports = {
  entry: './src/app.js',
  devtool: 'sourcemap',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src'),
      loader: 'babel'    // 一定别忘记创建.babelrc的babel配置文件,这个文件是用来设置转码的规则和插件的
    }, {
      test: /\.css$/,
      loader: "style!css"
    }]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};
