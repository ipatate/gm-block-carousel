const webpack = require("webpack");
const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");

// define if prod
const dev = process.env.NODE_ENV !== "production";

// test for create 2 css files with mini css extract plugin
const recursiveIssuer = m => {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
};

const config = {
  context: __dirname,
  devtool: dev ? "inline-sourcemap" : false,
  mode: dev ? "development" : "production",
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"]
  },
  output: {
    // path: path.resolve(__dirname, "/dist"),
    // publicPath: path.resolve(__dirname, "/dist")
  },
  entry: {
    main: "./src/index.js",
    "gm-carousel": "./src/front/index.js",
    "gm-carousel-siema": "./src/front/siema.min.js",
    editor: "./src/styles/editor.scss",
    styles: "./src/styles/index.scss"
  },
  //   externals: {
  //     siema: "siema"
  //   },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      //   {
      //     test: /\.svg$/,
      //     use: ["@svgr/webpack"]
      //   }
      {
        test: /\.svg(\?.*)?$/, // match img.svg and img.svg?param=value
        use: [
          "url-loader", // or file-loader or svg-url-loader
          "svg-transform-loader"
        ]
      }
    ]
  },
  // for create 2 css files
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        editor: {
          name: "editor",
          test: (m, c, entry = "editor") =>
            m.constructor.name === "CssModule" && recursiveIssuer(m) === entry,
          chunks: "all",
          enforce: true
        },
        styles: {
          name: "styles",
          test: (m, c, entry = "styles") =>
            m.constructor.name === "CssModule" && recursiveIssuer(m) === entry,
          chunks: "all",
          enforce: true
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    {
      // remove unecessary js files
      apply(compiler) {
        compiler.hooks.shouldEmit.tap(
          "Remove styles from output",
          compilation => {
            return [
              "styles.js",
              "editor.js"
              //   "editor.asset.php",
              //   "styles.asset.php"
            ].map(e => delete compilation.assets[e]);
          }
        );
      }
    },
    // remove dist folder before build
    new CleanWebpackPlugin(),
    // create file for dependency wordpress
    new DependencyExtractionWebpackPlugin()
  ]
};

if (dev) {
  config.output.publicPath = "http://localhost:8080/";
  config.devServer = {
    contentBase: path.join(__dirname, "dist"),
    hot: true,
    inline: true,
    quiet: true,
    overlay: true,
    historyApiFallback: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    stats: {
      colors: true
    },
    // public: "http://localhost:8080/",
    // host: "localhost",
    // port: 8080,
    disableHostCheck: true
  };
}

module.exports = config;
