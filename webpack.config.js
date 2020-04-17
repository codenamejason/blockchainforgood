const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    mode: 'development',
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    entry: './src/index.js',
    output: path.resolve(__dirname, 'public'),
    filename: 'frontend.bundle.js'
};