const path = require("path");
const webpack = require("webpack");
const jquery = require("jquery");

const rootPath = path.join(__dirname, "src", "client");
const jsRootPath = path.join(rootPath, "js");

const commonPlugin =
    new webpack.optimize.CommonsChunkPlugin({
        name: "common",
    })
const jQ =
    new webpack.ProvidePlugin({
        $: "jquery",
        "jQuery": "jquery",
        "window.jQuery": "jquery",
        _: "lodash",
    }) // end of jquery plugin

module.exports = {
    entry: {
        common: jsRootPath + "/common.js",
        home: jsRootPath + "/home.js"
    }, // entry

    output: {
        path: "./public/assets",
        publicPaht: "/assets/",
        filename: "js/[name].js",
    }, // output

    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader!source-map-loader',
                // exclude: /(node_modules|bower_components)/,
                include: jsRootPath
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(jpg|png)/,
                // loader: "file?name=img/[name].[ext]"
                loader: "url-loader"
            }
        ], // loader
    }, // module
    plugins: [jQ, commonPlugin] // plugin
}