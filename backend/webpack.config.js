const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "app.js",
    path: `${__dirname}/dist/`
  },
  resolve: {
    // alias: {
    //   '$components': path.join(__dirname, './components/'),
    //   '$modules': path.join(__dirname, './modules/'),
    //   '$mixins': path.join(__dirname, './mixins/'),
    // },
    // extensions: ['.js', '.jsx', '.vue'],
    fallback: {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "crypto": false,
      "async_hooks": false,
      // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify
    }
  },
  // module: {
    // rules: [
    //   {
    //     test: /\.js$/,
    //     use: {
    //       loader: "babel-loader"
    //     }
    //   },
    // ],
  // },
  plugins: [
    new NodePolyfillPlugin()
  ]
}
