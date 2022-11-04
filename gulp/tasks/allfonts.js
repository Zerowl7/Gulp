module.exports = function () {
  $.gulp.task('allfonts', function () {
    return $.gulp.src('fonts/*.*')
        .pipe($.gulp.dest('build/assets/fonts'))
        .on('end', $.browserSync.reload);
  });
};