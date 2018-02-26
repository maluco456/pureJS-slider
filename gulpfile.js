/**
 * Created by Alexandre on 25/01/2018.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    notify = require('gulp-notify'),
    gulpif = require('gulp-if'),
    cleanCSS = require('gulp-clean-css');

var cleanCSSoptions = {compatibility: 'ie8'};

var args = require('yargs')
    .default('production',false)
    .alias('p','production')
    .argv;

gulp.task('cleanCSS',function(){
    return gulp.src('css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('css'));
});

gulp.task('sass', function() {
    return gulp
        .src('scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', notify.onError(function (error) {
            return 'Error ao compilar SASS: ' + error.message;
        })))
        .pipe(notify({ message: 'SASS Compilado' }))
        //.pipe(gulpif(args.production , cleanCSS(cleanCSSoptions) ))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'))
        .pipe(livereload())
        ;
});

gulp.task('watch',function() {
    //livereload.listen();
    gulp.watch('./scss/**/*.scss',['sass']);
    gulp.watch('./css/**/*.css',['cleanCSS']);
});

gulp.task('default', ['sass']);