var reduce = 10;

define('reduce', [], function() {
    return function(value) {
        return value - reduce;
    }
});