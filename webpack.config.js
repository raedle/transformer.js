const fs = require('fs');
const path = require('path');

// package configuration
const pkg = require('./package.json');

// webpack
const webpack = require('webpack');

// webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const banner = {
//     banner: "some banner\n\nlinebreaks\nonemore", // the banner as string, it will be wrapped in a comment
//     // raw: boolean, // if true, banner will not be wrapped in a comment
//     // entryOnly: boolean, // if true, the banner will only be added to the entry chunks
//     // test: string | RegExp | Array,
//     // include: string | RegExp | Array,
//     // exclude: string | RegExp | Array,
// };

module.exports = {
    entry: {
        "transformer": './src/index.js',
        "transformer.min": './src/index.js'
    },
    // devtool: 'source-map',
    // devServer: {
    //     contentBase: './dist',
    //     hot: true
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        //     new webpack.BannerPlugin(fs.readFileSync('./_LICENSE', 'utf-8')),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            sourceMap: true
        })//,
        // new HtmlWebpackPlugin({
        //     title: `${pkg.name} v${pkg.version}`,
        //     inject: 'head',
        //     filename: 'test.html'
        // }),
        // new HtmlWebpackPlugin({
        //     title: `${pkg.name} v${pkg.version}`,
        //     filename: 'test1.html'
        // })
        //     new webpack.NamedModulesPlugin(),
        //     new webpack.HotModuleReplacementPlugin()
    ],
    externals: ['hammerjs'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'Transformer',
        libraryTarget: 'window'
    }
};