var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
	gulp.src('./src/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./src/scss/style.scss', ['sass']);
});