const merge = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common.config.js');

const devConfig = {
    devtool: 'inline-source-map',
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        loaders: [{
            test: /\.[s]?css$/,
            loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        host: 'localhost',
        port:'8000',
        inline: true, //可以监控js变化
        hot: true, //热启动
        proxy: {
            '/api': {
                target: 'http://mock.sysware.com.cn/mock/14',
                changeOrigin: true,
                disableHostCheck: true
            }
        }
    }
};

module.exports = merge(commonConfig, devConfig);