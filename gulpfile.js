/**
 * Created by dross on 5/15/17.
 */
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

gulp.task('clean', function() {
    return del('docs');
});

gulp.task('copy-base-files', function() {
    gulp.src([
        './index.html',
        // './CNAME',
        './favicon.ico'
    ])
        .pipe(gulp.dest('./docs'));
});

gulp.task('copy-views', function() {
    gulp.src('./views/**/*.html')
        .pipe(gulp.dest('./docs/views'));
});

gulp.task('copy-pics', function() {
    gulp.src([
            './pics/*.svg'
        ])
        .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe(gulp.dest('./docs/pics'));
});

gulp.task('scripts', function() {
    gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/angular/angular.min.js',
        './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
        './node_modules/semantic-ui/dist/semantic.min.js',
        './app.js',
        './views/**/*.js',
        './js/directives/*.js'])
        .pipe(concat('all.js'))
        .pipe(rename({suffix: '.min'}))
        // .pipe(uglify())
        .pipe(gulp.dest('./docs/assets/js'))
});

gulp.task('styles', function() {
    return sass('./css/main.scss', { style: 'expanded' })
        .pipe(autoprefixer('last 2 version'))
        .pipe(rename({suffix: '.min'}))
        .pipe(cssnano())
        .pipe(gulp.dest('./docs/assets/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('default', ['clean'], function() {
    gulp.start(
        'copy-base-files',
        'copy-views',
        'copy-pics',
        'styles',
        'scripts'
    );
});