let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let sass = require('gulp-sass');
let watch = require('gulp-watch');
let rename = require('gulp-rename');
let gulpSequence = require('gulp-sequence');

gulp.task('sass', function () {
    var stream = gulp.src('./src/scss/App.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/'))
        .pipe(rename('App.css'));
    return stream;
});

gulp.task('minify-css', () => {
  return gulp.src('./src/App.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./src/'));
});

gulp.task('styles', function(callback){
	gulpSequence('sass', 'minify-css')(callback)
});

gulp.task('watch', function () {
	gulp.watch('./src/scss/*.scss', ['styles']);
});
