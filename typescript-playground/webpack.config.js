module.exports = {
    entry: "./main.ts",
    output: { filename: "bundle.js" },
    mode: "development",
    devtool: "inline-source-map",
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
}