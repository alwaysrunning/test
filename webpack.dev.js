var path = require("path");
var webpack = require("webpack");
module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: 'build/',
        inline: true,
        hot: true,
        open: true,
        port: 8080,
        noInfo: true,
        historyApiFallback: true,
        headers: {
            'X-Custom-Foo': 'bar'
        },
        compress: true
    }
};