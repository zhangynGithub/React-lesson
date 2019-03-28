var webpack = require('webpack'),
    assetPath = '/assets/',
    path = require('path'),
    fs = require('fs'),
    merge = require('merge'),
    isDev = process.env.npm_lifecycle_event === "start",
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    _chunks = [],
    oConfig = getOEntry(),
    _exports = { //基础配置
        entry: oConfig.oEntry,
        // devtool: 'source-map',
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'js/[name].js?v=[chunkhash:8]',
            publicPath: isDev ? '' : assetPath
        },
        module: {
            rules: getRules()
        }
    },
    _plugins = [
        //拷贝文件
        new CopyWebpackPlugin([{
            from: __dirname + '/src/lib',
            to: 'lib'
        }]),
        //自动加载模块，而不必到处 import 或 require 。
        // new webpack.ProvidePlugin({
        //     $: "jquery"
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'global', // 生成名为`global`的chunk
            filename: 'js/global.js?v=[hash:8]',
            minChunks: Infinity // 这个配置保证没其它的模块会打包进 global
        }),
        new ExtractTextPlugin({ filename: 'css/[name].css?v=[contenthash:8]' }),
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJsPlugin({
            uglifyOptions: {
                "ie8": true
            }
        })
    ];


//生成入口对象
function getOEntry() {
    var routerPath = './src/router/',
        oEntry = {

        },
        aHtmlWebpackPlugin = [],
        files = fs.readdirSync(routerPath); //遍历router文件夹的文件

    files.forEach(function (item) {
        var tmp = item.split('.');
        if (tmp[1] !== 'js') {
            return;
        }
        _chunks.push(tmp[0]);
        oEntry[tmp[0]] = [
            [routerPath, item].join('')
        ];
        if (tmp[0] === "global") {//所有公共模块在global.js里引用
            return;
        }
        var fileSrc = tmp[0] + '.html';
        aHtmlWebpackPlugin.push(new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'templates', fileSrc),
            filename: fileSrc,
            chunks: ["global", tmp[0]],
            minify: false
        }));
    });

    return {
        oEntry: oEntry,
        aHtmlWebpackPlugin: aHtmlWebpackPlugin
    };
}

function getExports() {
    var plugins = _plugins;

    _exports.plugins = plugins.concat(oConfig.aHtmlWebpackPlugin);

    if (isDev) {
        _exports = merge(_exports, {
            devServer: {
                host: 'localhost',
                port: 9090,
                inline: true, //可以监控js变化，刷新浏览器
                hot: true, //热启动
                proxy: {
                    '/api': {
                        target: 'http://mock.sysware.com.cn/mock/14',
                        changeOrigin: true//访问第三方域名必须
                    }
                }
            }
        })
    };
    return _exports;
}

function getRules() {
    var rules = [{
        test: /\.js$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        loaders: ['es3ify-loader']
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
            presets: [["env", {
                "targets": {
                    "browsers": ["last 5 versions"]
                }
            }]]
        }
    }, {
        test: /\.[s]?[ac]ss$/,
        loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [{
                loader: "css-loader"
            }, {
                loader: 'postcss-loader'
            }, {
                loader: "sass-loader"
            }]
        })
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [{
            loader: 'file-loader',
            options: {
                limit: 8192,
                name: 'images/[name].[ext]?v=[hash:8]',
                publicPath: isDev ? '../' : assetPath
            }
        }]
    },
    {
        test: /\.(ttf|eot|svg|mp4|mp3)$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: 'images/[name].[ext]?v=[hash:8]',
                publicPath: isDev ? '../' : assetPath
            }
        }]
    }, 
    {
        test: /\.(htm[l]?)$/i,
        use: [{
            loader: 'html-loader',
            options: {
                attrs: ['img:src', ':data-src'],//提取img标签的src属性，以及所有标签data-src属性
                minimize: false //不压缩代码
            }
        }]
    }
];
    return rules;
}

module.exports = getExports()