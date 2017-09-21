const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
            }),
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [{
                    use: "url-loader",
                    options: { limit: 40000 }
                },
                'image-webpack-loader'
            ]
        }]
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
    ]
};

module.exports = config;