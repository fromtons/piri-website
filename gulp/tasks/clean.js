/**
 * Created by jerek0 on 07/05/2015.
 */
import gulp from 'gulp';
import clean from 'gulp-clean';
import config from '../config';

gulp.task('clean', () => {
    return gulp.src(config.global.dest, {read: false})
        .pipe(clean());
});
