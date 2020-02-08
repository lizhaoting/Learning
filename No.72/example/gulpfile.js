const { series } = require('gulp');

function private(cb) {
    cb();
}

function public(cb) {
    cb();
}

exports.public = public;
exports.default = series(private, public);