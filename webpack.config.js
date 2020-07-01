const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    // mode: 'production',
    entry: {
        // app: './src/index.js',
        index: './src/index.js',
        vendor: ['lodash']
        // print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['loader: MiniCssExtractPlugin.loader', 'css-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin(),
        new webpack.NamedModulesPlugin(),
        
        // new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
    },
    optimization: {
        runtimeChunks: {
            name: 'manifest',
        },
        nameModules: true,
        nameChunks: true,
        moduleIds: 'hashed',
        splitChunks: {
            maxInitialRequests: 10,
            automaticNameDelimiter: '-',
            // name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                },
                commons: {
                    name: "commons",
                    chunks: "initial",
                    // minChunks: 2
                }
            }
        }
    }
}