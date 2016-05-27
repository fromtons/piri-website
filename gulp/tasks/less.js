/**
 * Created by jerek0 on 06/05/2015.
 */
import gulp from 'gulp';
import config from '../config';
import less from 'gulp-less';
import clean from 'gulp-clean';
import path from 'path';
import plumber from 'gulp-plumber';
import handleErrors from '../util/handleErrors';
import minifyCSS from 'gulp-minify-css';
import concatCss from 'gulp-concat-css';
import browserSync from 'browser-sync';
import postcss from 'gulp-postcss';

gulp.task('lessClean', () => {
    return gulp.src(config.less.dest, {read: false})
        .pipe(clean());
});

gulp.task('less', ['lessClean'], () => {
    return gulp.src(config.less.main)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(less({
            paths: [ path.join(config.less.src, 'less', 'includes') ]
        }))
        .pipe(concatCss("min.css"))
        .pipe(postcss([ require('autoprefixer')]))
        .pipe(minifyCSS("min.css"))
        .pipe(gulp.dest(config.less.dest))
        .pipe(browserSync.reload({
            stream: true
        }));
});
