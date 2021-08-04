module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                '@':'src',
                'assets':'@/assets',
                'common':'@/common',
                'component':'@/component',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}