const { merge } = require("webpack-merge")
const webpack = require("webpack")
const baseConfig = require("./webpack.config.base")

module.exports = merge(baseConfig, {
    mode: "development",
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin({})],
    devtool: "cheap-module-source-map",
})
