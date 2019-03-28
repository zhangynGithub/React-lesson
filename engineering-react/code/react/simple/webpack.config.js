let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: {
        "index": './src/index.js',
        "form": './src/form.js',
        "form-noctrl": './src/form-noctrl.js',
        "life-cycle": './src/life-cycle.js',
        "comm": './src/comm.js',
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: 'babel-loader',
            query: {
                presets: ["env", 'react']
            }
        }, {
            test: /\.css$/,
            loaders: ['style-loader', "css-loader"]
        }]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: '8080',
        hot: true,
        inline: true,
        compress: true, //gzip
        proxy: {
            '/api': {
                target: 'http://mock.sysware.com.cn/mock/14',
                changeOrigin: true//访问第三方域名必须
            }
        }
    }
}