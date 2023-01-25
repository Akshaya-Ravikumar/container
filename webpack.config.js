const HtmlWebpackPlugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
module.exports = {
    mode: 'development',
    devServer: {
        port: '8080'
    },
    plugins: [
        new moduleFederationPlugin({
            name: 'container',
            remotes: {
                mfe1: 'mfe1@http://localhost:8081/remoteEntry.js',
                mfe2: 'mfe2@http://localhost:8082/remoteEntry.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};