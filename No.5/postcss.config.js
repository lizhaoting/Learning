module.exports = {
    plugins:[
        require('postcss-modules'),
        require('autoprefixer')({"browsers": ["last 10 versions"]}),
        require('postcss-cssnext'),
        require('lost'),
        require('stylelint'),
    ],
}