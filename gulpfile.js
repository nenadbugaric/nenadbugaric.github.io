var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch');

gulp.task('sass', function(){
  return gulp.src('assets/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function() {
  gulp.watch('assets/sass/main.scss', ['sass']);
});