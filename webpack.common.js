const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js',
        bar: './src/bar.js'
        // another: './src/another.js'
        // print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            // test: /\.js$/,
            // use: [{
            //     loader: 'babel-loader',
            //     options: {
            //         presets: [['es2015', {module: false}]]
            //     },
            //     // plugins: ["syntax-dynamix-import"]
            // }],
            // exclude: /node_modules/,
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new CleanWebpackPlugin(),       
    ],
    optimization: {
        // runtimeChunks: {
        //     name: 'manifest',
        // },
        splitChunks: {
            maxInitialRequests: 10,
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    // minChunks: 2
                }
            }
        }
    }
}