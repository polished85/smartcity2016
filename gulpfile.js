// dependencies ====================================
var 
  gulp        = require('gulp')
, concat      = require('gulp-concat')
, less        = require('gulp-less')
, minify      = require('gulp-clean-css')
, rename      = require('gulp-rename')  
, uglify      = require('gulp-uglify')

// styles =======================================
gulp.task('styles', function () {
  gulp.watch('./src/less/**/*.less', function () {
    gulp.src('./src/less/styles.less')
      .pipe(less())
      .pipe(gulp.dest('./dist/css'))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(minify())
      .pipe(gulp.dest('./dist/css'));
    });
});


// default task =======================================
gulp.task('default', ['styles']);