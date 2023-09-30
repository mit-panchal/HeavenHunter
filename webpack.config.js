// webpack.config.js
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const path = require("path");

module.exports = {
  // Your existing Webpack configuration goes here
  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
      crypto: require.resolve("crypto-browserify"),
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
    },
  },
  plugins: [
    // Add the NodePolyfillPlugin to your plugins array
    new NodePolyfillPlugin(),
  ],
};
