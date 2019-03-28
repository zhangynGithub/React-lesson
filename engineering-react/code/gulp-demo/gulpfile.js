var gulp = require('gulp');
var watch = require('gulp-watch');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();
var proxy = require('http-proxy-middleware');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var image = require('gulp-image');
var babel = require('gulp-babel');
var rimraf = require('gulp-rimraf');

var plugins = [
    autoprefixer({ browsers: ['last 1 version', 'not ie < 8', 'Firefox > 20'] }),
    cssnano()
];

gulp.task('clean', function () {
    //删除文件
    gulp.src('./dest/**/*', { read: false }) // much faster
        .pipe(rimraf());
})

gulp.task('css', function () {
    //处理css文件
    gulp.src('./src/css/router/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(rename(function (path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('js', function () {
    //处理js文件
    gulp.src('./src/js/router/*.js')
        .pipe(browserify().on('error', gutil.log))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += '.min'
        }))
        .pipe(gulp.dest('./dest/js'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('img', function () {
    //处理图片
    gulp.src('./src/images/**/*')
        .pipe(watch('./src/images/*'))
        .pipe(image())
        .pipe(gulp.dest('./dest/images'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task("html", function () {
    //拷贝html文件
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dest'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task("statics", function () {
    //拷贝静态资源
    gulp.src('./src/statics/**/*')
        .pipe(gulp.dest('./dest/statics'))
        .pipe(browserSync.reload({ stream: true }));
})

gulp.task('build', ["css", "js", "img", "html", "statics"], function () {
    // gulp.src('./src').pipe(process.exit)
});

gulp.task("server", ["css", "js", "img", "html", "statics"], function () {
    browserSync.init({
        port: '8001',
        open: false,
        server: {
            baseDir: "./dest"
        },
        middleware: [
            proxy(['/api'], {
                pathRewrite: {
                    '^/api': ''
                },
                target: 'http://rayson.jsers.cn',
                changeOrigin: true
            })
        ]
    })
    gulp.watch('./src/css/**/*', ['css']);
    gulp.watch('./src/js/**/*', ['js']);
    gulp.watch('./src/images/**/*', ['img']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/statics/**/*', ['statics']);
})

// gulp.task('watch', function () {
//     gulp.watch('./src/css/*', ['css'])//.on('change', browserSync.reload);;
//     gulp.watch('./src/js/*', ['js'])//.on('change', browserSync.reload);;
// });

gulp.task('default', ['server']);