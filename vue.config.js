module.exports ={
    devServer: {
        proxy: "http://localhost:4000"
    },
    configureWebpack: {
        devtool:'source-map'
    }
};