/**
 * Created by jerek0 on 06/05/2015.
 */
import gulp from 'gulp';

gulp.task('dev', ['scripts:dev', 'less', 'images', 'fonts', 'markup', 'watch:dev']);
gulp.task('prod', ['scripts:prod', 'less', 'images', 'fonts', 'markup', 'watch:prod']);
gulp.task('default', ['dev']);
