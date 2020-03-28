let gulp = require('gulp');
let sass = require('gulp-sass');
let uglify = require('gulp-uglify');
let clean = require('gulp-clean');
let rename = require("gulp-rename");

sass.compiler = require('node-sass');

gulp.task('clean', function () {
	return gulp.src('./dist/', { read: false, allowEmpty: true })
        .pipe(clean({force: true}));
});


gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch', function () {
	gulp.watch('sass/*.scss', gulp.series('sass')); //監聽路徑，以及檔案變更後所執行的任務
	gulp.watch('js/*.js', gulp.series('js')); //監聽路徑，以及檔案變更後所執行的任務
});

gulp.task('default', gulp.series('clean', 'sass', 'js', function(done) {
    done();
}));

gulp.task('build-then-watch', gulp.series('default', 'watch', function(done) {
    done();
}));
