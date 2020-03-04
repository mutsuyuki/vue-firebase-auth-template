const path = require('path')

module.exports = {
    publicPath: './',

    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, '/app_template/src') //  @の参照先の変更
            }
        }
    },
    outputDir: 'app_template/dist', // 出力先
    pages: {
        index: {
            entry: 'app_template/src/main.ts', // エントリーポイント
            template: 'app_template/public/index.html' // index.htmlテンプレート
        }
    }
};
