/**
 * Created by jerek0 on 06/05/2015.
 */
import browserSync from 'browser-sync';
import gulp from 'gulp';
import config from '../config';

gulp.task('browserSync', () => {
    browserSync(config.browserSync);
});
