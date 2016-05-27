/**
 * Created by jerek0 on 06/05/2015.
 */
import changed from 'gulp-changed';
import gulp from 'gulp';
import config from '../config';
import browserSync from 'browser-sync';

gulp.task('fonts', () => {
    return gulp.src(config.fonts.src)
        .pipe(changed(config.fonts.dest)) // Ignore unchanged files
        .pipe(gulp.dest(config.fonts.dest))
        .pipe(browserSync.reload({stream:true}));
});
