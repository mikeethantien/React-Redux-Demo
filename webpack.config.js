var webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: [
    //"webpack-hot-middleware/client", //Development Only
    "./app/client/client.js"
  ],
  output:  {
    path: require("path").resolve("./app/dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "react-hmre"]
        }
      }
    ]
  }
}
