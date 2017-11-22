(function () {

  var gulp = require('gulp');
  var del = require('del');
  var $ = require('gulp-load-plugins')();

  gulp.task('clean', function () {
    return del('dist');
  });

  gulp.task('sass', ['clean'], function () {
    return gulp.src('src/vue-widget-tab.scss')
      .pipe($.sass({
        outputStyle: 'compressed'  //`nested`, `expanded`, `compact`, `compressed`
      }))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('minifyJs',['clean'],function(){
    return gulp.src('src/vue-widget-tab.js')
      .pipe($.uglify())
      .pipe(gulp.dest('dist'));
  });


  gulp.task('default', ['minifyJs','sass'])

}());
