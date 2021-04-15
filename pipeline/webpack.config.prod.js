const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.config.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const InterpolateHtmlPlugin = require("@gozenc/interpolate-html-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(baseConfig, {
    mode: "production",
    output: {
        // Puts garbage collection pressure on projects
        // that bundle thousands of modules.
        clean: true,
        pathinfo: false,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
            PUBLIC_URL: "Public URL"
        }),
    ],
    resolve: {
        alias: {
            react: "preact/compat",
            "react-dom": "preact/compat",
        },
    },
})
