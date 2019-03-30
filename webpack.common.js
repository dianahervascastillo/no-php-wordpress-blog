const path = require('path');

module.exports = {    
    entry: ['./src/index.js','./src/stylesheets/main.scss'],
    output: {
        filename: 'js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: [/node_modules/],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
}