module.exports = function() {
    $.gulp.task('img', () => {
        return $.gulp.src('./src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gulp.dest('./build/static/img/'));
    });
};