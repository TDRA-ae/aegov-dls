const { SourceMapDevToolPlugin } = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    "aegov-scripts": path.resolve(__dirname, "js/src/index.umd.ts"),
    "aegov-scripts.min": path.resolve(__dirname, "js/src/index.umd.ts"),
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    libraryTarget: "umd",
    library: "AEGov",
    umdNamedDefine: true,
    path: path.resolve(__dirname, "static/"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  plugins: [
    new SourceMapDevToolPlugin({
        filename: '[file].map',
    })
  ],
  optimization: {},
  target: ["web", "es5"],
}