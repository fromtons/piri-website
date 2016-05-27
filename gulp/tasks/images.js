/**
 * Created by jerek0 on 06/05/2015.
 */
import changed from 'gulp-changed';
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('images', () => {
    return gulp.src(config.images.src)
        .pipe(changed(config.images.dest)) // Ignore unchanged files
        .pipe(imagemin()) // Optimize
        .pipe(gulp.dest(config.images.dest))
        .pipe(browserSync.reload({stream:true}));
});
