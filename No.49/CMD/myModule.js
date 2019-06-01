define(function(require, exports, module) {
    var increase = require('increase');
    var reduce = require('./reduce');

    module.exports = function(value) {
        return increase(value) + reduce(value);
    }
});