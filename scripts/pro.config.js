const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin  = require('html-webpack-plugin');


module.exports = {
    entry:{
        index:[
            path.resolve(__dirname,'../src/index.js')
        ],
    },

    output:{
        path:path.resolve(__dirname,'../dist'),

        filename:'[name].[chunkhash].js',

        publicPath:'/'
    },

    module:{
        rules:[
            {
                test:/\.jsx?$/,
                exclude: /(node_modules)/,
                use:[
                    {
                        loader:"babel-loader"
                    }
                ]
            },

            {
                test:/\.less$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader'
                    },
                    {
                        loader:'less-loader'
                    }
                ]

            },

            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader'
                    },
                    {
                        loader:'css-loader'
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]

            },


            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  minetype: 'application/font-woff',
                },
            },

            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  minetype: 'application/font-woff',
                },
            },

            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  minetype: 'application/octet-stream',
                },
            },

            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  minetype: 'application/vnd.ms-fontobject',
                },
            },

            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  minetype: 'image/svg+xml',
                },
            },

            {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                },
            },

            /* {
                test: /\.html?$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                },
            } */


        ]

    },

    resolve:{
        extensions:['.web.jsx', '.web.js', '.js', '.jsx', '.json','.less','.css']

    },

    externals:{

    },

    plugins:[

        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            path: path.resolve(__dirname, '../dev'),
            filename:'index.html'
        }),

        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/lib-manifest.json'),
        }),

        /* new webpack.HashedModuleIdsPlugin({
            
        }) */

        new webpack.optimize.CommonsChunkPlugin({
            name: "manifest",
            minChunks: Infinity
        }),


        new webpack.optimize.CommonsChunkPlugin({
            children: true,
        }),

        new webpack.NamedModulesPlugin(),

    ]

}