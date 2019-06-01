var increase = 1;

define('increase', [], function() {
    return function(value) {
        return value + increase;
    }
});