const { merge } = require("webpack-merge")
const prodConfig = require("./webpack.config.prod")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = merge(prodConfig, {
    devtool: "cheap-module-source-map",
    plugins: [
        new BundleAnalyzerPlugin({
            openAnalyzer: true,
        }),
    ],
})
