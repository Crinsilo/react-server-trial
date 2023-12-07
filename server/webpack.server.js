const path = require("path");

module.exports = {
  target: "node",
  mode: "development",
  entry: "./server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../serverbuild"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ["@babel/preset-env"],
              ["@babel/preset-react", { runtime: "automatic" }],
            ],
          },
        },
      },
      // {
      //   test: /\.s(c|a)ss$/,
      //   use: [
      //     "style-loader",
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //       },
      //     },
      //     "sass-loader",
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      [path.resolve(__dirname, "../src/app.module.scss")]: false,
    },
  },
};
