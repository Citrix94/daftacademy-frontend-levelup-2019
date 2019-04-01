const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isProduction = process.env.NODE_ENV === 'production';
const isProduction = true;

const distDir = path.resolve(__dirname, 'dist');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: distDir
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: distDir
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    isProduction ?
                    MiniCssExtractPlugin.loader :
                    {
                        loader: 'style-loader',
                        options: {
                            sourceMap: isProduction
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isProduction
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: isProduction
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isProduction,
                            sourceMapContents: false
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Daftacademy FrontEnd Level UP 2019',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
}