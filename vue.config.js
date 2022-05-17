const WebpackAliyunOssPlugin = require('./oss');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    outputDir: 'output',
    productionSourceMap: false,

    css: {
        sourceMap: true
    },

    configureWebpack: {
        plugins: [
            new WebpackAliyunOssPlugin({
                enable: false
            }),
            new CopyWebpackPlugin({
                patterns: [{
                    from: "./src/assets/img",
                    to: 'img'
                }]
            })
        ]
    },

    publicPath: '/'
};
