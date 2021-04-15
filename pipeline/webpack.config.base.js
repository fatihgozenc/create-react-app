const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
    entry: path.resolve("./src/index.tsx"),
    output: {
        path: path.resolve("./dist"),
        filename: "app.bundle.js",
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                loader: "ts-loader",
                exclude: [path.resolve("./node_modules")],

                options: {
                    // Disables type checker
                    // Because we have fork plugin
                    transpileOnly: true,
                },
            },
            {
                exclude: [
                    /\.(tsx|ts)?/,
                    /\.(jsx|js)?$/,
                    /\.html$/,
                    /\.s[ac]ss$/i,
                    /\.json$/,
                ],
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./src/index.html"),
        }),
        // Speeds up TypeScript type checking and
        // ESLint linting by moving each to a separate process.
        new ForkTsCheckerWebpackPlugin({
            eslint: {
                files: path.resolve("./src/**/*.{ts,tsx,js,jsx}"),
            },
        }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
}
