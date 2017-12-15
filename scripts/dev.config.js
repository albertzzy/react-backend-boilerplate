const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin  = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');



module.exports = {
    devtool:'cheap-eval-source-map',

    entry:{
        index:[
            'react-hot-loader/patch',
            'webpack-hot-middleware/client?path=/__hmr&timeout=20000',
            path.resolve(__dirname,'../src/index.js')
        ],
    },

    output:{
        path:path.resolve(__dirname,'../dev'),

        filename:'[name].bundle.js',

        publicPath:'/'
    },

    module:{
        rules:[
            {
                enforce:'pre',
                test:/\.jsx?$/,
                exclude:/(node_modules)/,
                use:[
                    {
                        loader:'eslint-loader'
                    }
                ]
            },
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
        // can not add
        /* 'react':'window.vendor["React"]',
        'react-dom':'window.vendor["react-rom"]',
        'react-redux':'window.vendor["react-redux"]',
        'redux':'window.vendor["redux"]',
        'react-router':'window.vendor["react-router"]' */
    },

    plugins:[

        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            path: path.resolve(__dirname, '../dev'),
            filename:'index.html'
        }),

        new HtmlWebpackIncludeAssetsPlugin({
            /* fuck this option */
            files:'index.html',
            assets: [{path:'dll',glob:'**.js'}],
            append: false
        }),

        new webpack.DllReferencePlugin({
            // context: __dirname,
            // name:'../dll/lib.dll.js',
            context:__dirname,
            manifest: require('../dev/dll/vendor-manifest.json'),
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
        new webpack.HotModuleReplacementPlugin(),


        /* new BundleAnalyzerPlugin({
            analyzerMode:'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
            openAnalyzer: true,
            generateStatsFile: true,
            statsFilename: 'stats.json'
        }) */
        new webpack.DefinePlugin({
            DEV:JSON.stringify(true)
        })

    ]

}