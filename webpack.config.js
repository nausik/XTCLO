const Path = require('path'),
    Webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './public/src/js/index.js',
        vendor: ['vue', 'vue-draggable-resizable']
    },
    output: {
        path: Path.resolve(__dirname, './public/dist/'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new Webpack.optimize.UglifyJsPlugin(),
        new Webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        }),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true,
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
            styles: Path.resolve(__dirname, './public/src/css/'),
            components: Path.resolve(__dirname, './public/src/components/'),
            js: Path.resolve(__dirname, './public/src/js/')
        }
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    },
                }
            }
        }, {
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }]
    }
};