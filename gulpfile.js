var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('./public/sass/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});
gulp.task('makeup', function () {
    gulp.src('../node_modules/makeup/dist/*').pipe(gulp.dest('./public/js/vendor/makeup/'));
});

gulp.task('watch', function () {
    gulp.watch('./public/sass/*.scss', ['sass']);
});

gulp.task('develop', function () {
    livereload.listen();
    nodemon({
        script: 'bin/www',
        ext: 'js swig coffee',
        stdout: false
    }).on('readable', function () {
        this.stdout.on('data', function (chunk) {
            if (/^Express server listening on port/.test(chunk)) {
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task('default', [
    'makeup',
    'sass',
    'develop',
    'watch'
]);
