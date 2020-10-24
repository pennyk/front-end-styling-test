var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var config = {
    html: {
        src: './*.html'
    },
    js: {
        src: 'app/js+(/**|)/*.+(js|jsx)'
    },
    sass: {
        src: 'app/sass/**/*.+(sass|scss)',
        src2: 'app/sass/*.+(sass|scss)'
    }
};

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('sass', function () {
    console.log('sass path:', config.sass.src);
    return gulp.src(config.sass.src)
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', function () {
    gulp.watch(config.sass.src, gulp.series('sass'));
    gulp.watch(config.sass.src2, gulp.series('sass'));
    gulp.watch(config.html.src).on('change', browserSync.reload);
    gulp.watch(config.js.src).on('change', browserSync.reload);
});

gulp.task('serve', gulp.series('sass', gulp.parallel('browser-sync', function () {
    gulp.watch(config.sass.src, gulp.series(['sass']));
    gulp.watch(config.html.src).on('change', browserSync.reload);
})));

gulp.task('default', gulp.series('serve'));
