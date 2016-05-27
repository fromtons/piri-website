/**
 * Created by jerek0 on 06/05/2015.
 */
import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('markup', () => {
    return gulp.src(config.markup.src)
        .pipe(gulp.dest(config.markup.dest))
        .pipe(browserSync.reload({stream:true}));
});
