const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const rename = require("gulp-rename");
const open = require('gulp-open');
const connect = require('gulp-connect');
const connectRewrite = require('connect-modrewrite');

sass.compiler = require('node-sass');

gulp.task('clean', function () {
    return gulp.src('./dist/', { read: false, allowEmpty: true })
        .pipe(clean({ force: true }));
});

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(connect.reload());
});

gulp.task('js', function () {
    return gulp.src('js/**/*.js')
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    return gulp.src('src/**/*.html').pipe(connect.reload());
});

gulp.task('webserver', function () {
    const server = connect.server({
        root: ['dist', 'src', 'static'],
        host: '0.0.0.0', //host設定'0.0.0.0'，就可以用內網檢視
        port: 3000, //設定一個沒在使用的port
        livereload: true, //auto refresh
        middleware: function () {
            return [
                connectRewrite([
                    '^.([^\\.]+)$ /$1.html [L]',
                ])
            ]
        },
    })
    return gulp.src('./')
        .pipe(open({
            uri: 'http://localhost:' + server.port
        }));
});

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', gulp.series('sass')); //監聽路徑，以及檔案變更後所執行的任務
    gulp.watch('js/**/*.js', gulp.series('js')); //監聽路徑，以及檔案變更後所執行的任務
    gulp.watch('src/**/*.html', gulp.series('html'));
});

gulp.task('default', gulp.series('clean', 'sass', 'js', gulp.parallel('webserver', 'watch'), function (done) {
    done();
}));

gulp.task('build', gulp.series(
    () => gulp.src('./deploy/', { read: false, allowEmpty: true }).pipe(clean({ force: true })),
    () => gulp.src('./dist/**/*').pipe(gulp.dest('./deploy/')),
    () => gulp.src('./src/**/*').pipe(gulp.dest('./deploy/')),
    () => gulp.src('./static/**/*').pipe(gulp.dest('./deploy/')),
));
