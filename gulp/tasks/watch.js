/**
 * Created by jerek0 on 06/05/2015.
 */

import gulp from 'gulp';
import config from '../config';

gulp.task('watch:dev', ['browserSync'], () => {
    gulp.watch(config.scripts.src,['scripts:dev']);
    gulp.watch(config.less.src,   ['less']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src,  ['fonts']);
    gulp.watch(config.markup.src, ['markup']);
    // TODO - Doesn't works for images and fonts additions (works for modifications though)
});

gulp.task('watch:prod', ['browserSync'], () => {
    gulp.watch(config.scripts.src,['scripts:prod']);
    gulp.watch(config.less.src,   ['less']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src,  ['fonts']);
    gulp.watch(config.markup.src, ['markup']);
});
