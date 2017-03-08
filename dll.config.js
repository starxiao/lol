/**
 * Created by xiaoxx on 2017/3/6.
 */
const webpack = require('webpack');

const vendors = [
    'vue',
    'vuex',
    'vue-router',
    'axios',
    'weui',
    'vconsole'
];
module.exports = {
    entry: {
        "lib": vendors
    },
    output: {
        path: './build',
        filename: 'lib.js',
        library: 'lib'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: 'lib',
            context: __dirname
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};