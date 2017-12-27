var testPlugin = require('./src/util/postcss-test');


module.exports = {
    plugins: [
        require('autoprefixer'),
        testPlugin
    ]
}