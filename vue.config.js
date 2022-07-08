const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    chainWebpack: config => {
        config.module.rule('pdf')
            .test(/\.pdf$/)
            .use('file-loader').loader('file-loader')
    },
    configureWebpack: {
        plugins: [
            new MiniCssExtractPlugin()
        ]
    }
}