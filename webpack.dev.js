const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const fs = require('fs');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // https: true,
        https: {
            key: fs.readFileSync("./mkcert/webpack.pem+2-key.pem"),
            cert: fs.readFileSync("./mkcert/webpack.pem+2.pem"),
            // ca: fs.readFileSync('/Users/gird/Library/Application\ Support/mkcert/rootCA.pem')
        }
    }
});