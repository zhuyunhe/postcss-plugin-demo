var postcss = require('postcss');
module.exports = postcss.plugin('myplugin', function () {
    var count = 0    
    return function (root, result) {
        // 处理逻辑
        count ++
        console.log('hello' + count)
    };
});