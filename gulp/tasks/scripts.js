import config from'../config';
import gulp from'gulp';
import babelify from'babelify';
import browserify from'browserify';
import uglify from'gulp-uglify';
import gutil from'gulp-util';
import sourcemaps from'gulp-sourcemaps';
import buffer from'vinyl-buffer';
import source from'vinyl-source-stream';
import clean from'gulp-clean';
import browserSync from'browser-sync';
import handleErrors from'../util/handleErrors';

gulp.task('cleanJs', () => {
    gulp.src(config.scripts.dest, {read: false})
        .pipe(clean());
});

gulp.task('scripts:dev', ['cleanJs'], () => {
  return browserify({ entries: config.scripts.main, debug: false })
    .transform(babelify.configure())
    .bundle().on('error', handleErrors)
    .pipe(source('min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('scripts:prod', ['cleanJs'], () => {
  return browserify({ entries: config.scripts.main, debug: false })
    .transform(babelify.configure())
    .bundle().on('error', handleErrors)
    .pipe(source('min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.reload({stream:true}));
});
