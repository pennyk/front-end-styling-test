var browserSync = require('browser-sync').create;
var gulp = require('gulp');
var sass = require('gulp-sass');
var sassPath = 'app/sass/**/*.+(sass|scss)';

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('sass', function () {
    return gulp.src(sassPath)
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function () {
    gulp.watch(sassPath, gulp.series(['sass']));
});

// function defaultTask(cb) {
//     // place code for your default task here
//     cb();
// }

// exports.default = defaultTask;
