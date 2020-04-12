const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const webserver = require('gulp-webserver')

sass.compiler = require('node-sass');

gulp.task('clean', function () {
    return gulp.src('./dist/', { read: false, allowEmpty: true })
        .pipe(clean({ force: true }));
});


gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function () {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('webserver', function () {
    gulp.src(['dist', 'src', '/']) //起始目錄
        .pipe(webserver({
            host: '0.0.0.0', //host設定'0.0.0.0'，就可以用內網檢視
            port: 3000, //設定一個沒在使用的port
            livereload: true, //auto refresh
            directoryListing: true,
            // fallback: 'js/about.min.js',
            open: "http://localhost:3000/index.html" //執行gulp時自動開啟browser
        }));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass')); //監聽路徑，以及檔案變更後所執行的任務
    gulp.watch('js/**/*.js', gulp.series('js')); //監聽路徑，以及檔案變更後所執行的任務
});

gulp.task('default', gulp.series('clean', 'sass', 'js', gulp.parallel('webserver', 'watch'), function (done) {
    done();
}));
