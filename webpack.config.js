const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const getClientEnvironment = require('./app/client/config/env');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const publicUrl = '/public';

const env = getClientEnvironment(publicUrl);

module.exports = {
 //   mode: 'development',
    devtool: 'inline-source-map',
    entry: { main: './app/client/index.js' },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{loader: 'babel-loader'}]
        },
        {
            test: /\.s?css$/,
            include: path.join(__dirname, 'app/client/public'),
            use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                include: path.join(__dirname, 'app'),
                exclude: /node_modules/,
                use:[{loader:'file-loader', options: {name: 'build/public/[path][name].[ext]'}}]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './app/client/public/index.html',
       //     favicon: './app/client/public/favicon.ico',
            filename: 'index.html'
        }),
        new InterpolateHtmlPlugin(env.raw),
        new CopyWebpackPlugin([{from:'./app/client/public', to:'public'}])
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        port: 9000
    }
};