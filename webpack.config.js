/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 5:14 PM
 */

'use strict';

var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        entry: path.join(srcPath, 'entry.js'),
        common: ['react', 'react-router', 'fluxible', 'fluxible-addons-react']
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        path: path.join(__dirname, 'public/c'),
        publicPath: '',
        filename: '[name].js',
        library: ['WebpackReactFluxible', '[name]'],
        pathInfo: true
    },
    module: {
        loaders: [
            { test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory' },
            { test: /\.css?$/, loader: 'style-loader!css-loader' },
            { test: /\.scss?$/, loader: 'style!css!sass' }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HTMLWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],
    debug: true,
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: './public/c',
        historyApiFallback: true
    }
};