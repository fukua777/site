const marked = require('marked');
const path = require('path');


const config = {
    entry: './webpack.config.js',
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: 'output.js'
    },
    module: {
        rules: [
            {
                test: /\.md$/
            }
        ]
    }
}

module.exports = config;