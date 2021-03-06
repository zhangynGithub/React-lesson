const merge = require('webpack-merge');

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const commonConfig = require('./webpack.common.config.js');

const publicConfig = {
    // devtool: 'cheap-module-source-map',
    output: {
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.[s]?css$/,
                loader: ExtractTextPlugin.extract("style", "css-loader?minimize!sass-loader!postcss-loader"),
                options: {
                    minimize: true
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*']),
        new UglifyJSPlugin({
            mangle: {
                screw_ie8: false
            },
            mangleProperties: {
                screw_ie8: false,
            },
            compress: {
                screw_ie8: false,
            },
            output: {
                screw_ie8: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('[name].[contenthash:5].css')
    ]

};

module.exports = merge(commonConfig, publicConfig);