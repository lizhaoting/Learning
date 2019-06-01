define(['increase', './reduce'], function(increase, reduce) {
    return function(value) {
        return increase(value) + reduce(value);
    }
});