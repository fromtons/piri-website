/**
 * Created by jerek0 on 06/05/2015.
 */

const dest = "./build";
const src = './src';

module.exports = {
    global: {
        src: src,
        dest: dest
    },
    less : {
        main: src + '/css/main.less',
        src: src + '/css/**/*',
        dest: dest + '/css'
    },
    images: {
        src: src + "/images/**",
        dest: dest + "/images"
    },
    markup: {
        src: src + "/htdocs/**",
        dest: dest
    },
    fonts: {
        src: src + "/fonts/**",
        dest: dest + "/fonts"
    },
    scripts: {
        main: src +"/js/main.js",
        src: src + "/js/**",
        dest: dest + "/js"
    },
    browserSync: {
        server: {
            // Serve up our build folder
            baseDir: dest
        }
    }
};
