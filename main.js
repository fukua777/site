var marked = require('marked');

var test_str = '# hello';

var result = marked(test_str);

module.exports = result;