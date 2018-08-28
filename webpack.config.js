const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: __dirname + "/src/js/content.js",
    output: {
        filename: "content.js",
        path: __dirname + "/build/js/"
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: __dirname + '/src/manifest.json',
                to: __dirname + "/build/"
            },
            {
                from: __dirname + '/src/icon/',
                to: __dirname + "/build/icon/"
            },
            {
                from: './src/_locales/',
                to: __dirname + "/build/_locales/"
            }
        ])
    ]
}