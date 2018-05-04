var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'inline-source-map',
    entry: ['babel-polyfill','./app/client/index.js'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.join(__dirname, 'app/client'),
            exclude: /node_modules/,
            use: [{loader: 'babel-loader'}]
        }]
    }
};