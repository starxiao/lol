/**
 * Created by xiaoxx on 2017/3/6.
 */


const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {resolve} = require('path');

const entry = {
    path: './app/index.js'
};

const output = {
    path: '/lol/build',    //绝对路径
    filename: 'build.js',
    chunkFilename: '[name].chunk.js'
};

module.exports = {
    entry: entry,
    output: output,
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader:'vue-loader',

                },

            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        // options: {    //需要在style 添加module
                        //     cssModules: {
                        //         localIdentName: '[name]-[local]-[hash:base64:5]',
                        //         camelCase: true
                        //     }
                        // }
                    },

                ],
                // use: ExtractTextPlugin.extract({
                //     use: [
                //         {
                //             loader: 'style-loader'
                //         },
                //         {
                //             loader: 'css-loader'
                //         }]
                // })
            },
            {
                test: /\.(jpe?g|png|gif|svg|map3)$/, //当处理图片的时候需要添加的url-loader 他依赖file-loader
                use: 'url-loader'
            },
            {
                test: /\.(js)?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        compact: false,
                        presets: [['es2015'], 'stage-2']
                    }

                },
                exclude: /node_modules/,
            }
        ]
    },
    // devServer: {
    //     hot: true,
    //     // 开启服务器的模块热替换(HMR)
    //     contentBase: resolve(__dirname, '/lol/build'),
    //     // 输出文件的路径
    // },
    // plugins: [
    //     new webpack.DllReferencePlugin({
    //         context: __dirname,
    //         manifest: require('./manifest.json')
    //     }),
    //     new webpack.HotModuleReplacementPlugin(),   // 开启全局的模块热替换(HMR)
    //     new webpack.NamedModulesPlugin(),      // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息
    //
    //     // new webpack.optimize.UglifyJsPlugin({
    //     //     compress: {
    //     //         warnings: false
    //     //     }
    //     // })
    //     // new ExtractTextPlugin('styles.css'),
    // ]
};