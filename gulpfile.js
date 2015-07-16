var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('assets/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        //.pipe(sass({ sourceComments: 'map' }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
});